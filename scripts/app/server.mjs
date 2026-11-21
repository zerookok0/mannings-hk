// scripts/app/server.mjs —— 本地 1:1 预览服务器（等价于线上 Cloudflare Pages + Functions 的行为）
//  - 静态：app/ 全部原站资源，SPA 回退到 index.html
//  - /graphql：先查快照缓存（cache/graphql/<key>.json），未命中则经 .NET 通道回源并落盘
//  - /media/*：先查本地原图/派生图，未命中回源
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn } from 'node:child_process';
import { ROOT, DATA } from '../lib/api.mjs';
import { graphqlKey, rewriteMediaUrls } from './keys.mjs';

const APP = path.join(ROOT, 'app');
const MEDIA_WEBP = path.join(ROOT, 'site', 'media');
const MEDIA_ORIG = path.join(ROOT, 'media-orig');
const CACHE = path.join(ROOT, 'cache');
const ORIGIN = 'https://www.mannings.com.hk';
const PORT = Number(process.env.PORT || 8790);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8', '.map': 'application/json; charset=utf-8',
};

async function exists(p) { try { await fs.stat(p); return true; } catch { return false; } }

function fetchViaDotNet(url, out, method = 'GET', body = '') {
  return new Promise((resolve) => {
    const args = ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts/ps/get.ps1', '-Url', url, '-Out', out, '-Method', method];
    if (body) args.push('-Body', body);
    const p = spawn('powershell', args, { cwd: ROOT });
    let status = '0';
    p.stdout.on('data', (d) => { status = String(d).trim().split(/\s+/).pop(); });
    p.on('close', () => resolve(Number(status) || 0));
  });
}

async function handleGraphql(req, res, urlObj, bodyBuf) {
  let op, variables, query;
  if (req.method === 'POST') {
    try {
      const j = JSON.parse(bodyBuf.toString('utf8'));
      op = j.operationName; variables = j.variables; query = j.query;
    } catch { op = undefined; }
  } else {
    op = urlObj.searchParams.get('operationName');
    variables = urlObj.searchParams.get('variables');
    query = urlObj.searchParams.get('query');
  }
  const key = graphqlKey({ operationName: op, variables, query });
  if (op && query) {
    const qdir = path.join(CACHE, 'queries');
    const idxFile = path.join(qdir, '_index.json');
    await fs.mkdir(qdir, { recursive: true });
    let idx = {};
    try { idx = JSON.parse(await fs.readFile(idxFile, 'utf8')); } catch { idx = {}; }
    const varKeys = Object.keys((variables && typeof variables === 'string') ? (() => { try { return JSON.parse(variables); } catch { return {}; } })() : (variables || {})).sort().join(',');
    const list = idx[op] = idx[op] || [];
    if (!list.some((x) => x.query === String(query))) {
      list.push({ varKeys, query: String(query) });
      await fs.writeFile(idxFile, JSON.stringify(idx, null, 1), 'utf8');
    }
  }
  const cacheFile = path.join(CACHE, 'graphql', key + '.json');
  if (await exists(cacheFile)) {
    const buf = await fs.readFile(cacheFile);
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-mirror': 'snapshot' });
    res.end(rewriteMediaUrls(buf.toString('utf8')));
    return;
  }
  // 回源（用原站同样的 GET 形式）
  const src = new URL(ORIGIN + '/graphql');
  if (query) src.searchParams.set('query', String(query));
  if (op) src.searchParams.set('operationName', String(op));
  src.searchParams.set('variables', typeof variables === 'string' ? variables : JSON.stringify(variables || {}));
  await fs.mkdir(path.dirname(cacheFile), { recursive: true });
  const tmp = cacheFile + '.tmp';
  const status = await fetchViaDotNet(src.toString(), tmp);
  if (status === 200 && (await exists(tmp))) {
    await fs.rename(tmp, cacheFile);
    const buf = await fs.readFile(cacheFile);
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-mirror': 'live' });
    res.end(rewriteMediaUrls(buf.toString('utf8')));
    return;
  }
  res.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ errors: [{ message: 'mirror upstream error ' + status }] }));
}

async function handleMedia(req, res, urlObj) {
  const clean = decodeURIComponent(urlObj.pathname);
  const rel = clean.replace(/^\/media\//, '');
  // 1) 原图（R2 里的 1:1 资源）
  for (const ext of ['', '.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg']) {
    const cand = path.join(MEDIA_ORIG, rel + (ext && !/\.[a-z0-9]+$/i.test(rel) ? ext : ''));
    if (await exists(cand)) {
      const buf = await fs.readFile(cand);
      res.writeHead(200, { 'content-type': MIME[path.extname(cand).toLowerCase()] || 'application/octet-stream', 'cache-control': 'public, max-age=31536000, immutable' });
      res.end(buf);
      return;
    }
  }
  // 2) 500px webp 派生图
  const webp = path.join(MEDIA_WEBP, rel.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  if (await exists(webp)) {
    const buf = await fs.readFile(webp);
    res.writeHead(200, { 'content-type': 'image/webp', 'cache-control': 'public, max-age=31536000, immutable' });
    res.end(buf);
    return;
  }
  // 3) 回源抓原图并落盘
  const target = path.join(MEDIA_ORIG, rel);
  const status = await fetchViaDotNet(ORIGIN + clean + (urlObj.search || ''), target);
  if (status === 200 && (await exists(target))) {
    const buf = await fs.readFile(target);
    res.writeHead(200, { 'content-type': MIME[path.extname(target).toLowerCase()] || 'image/jpeg', 'cache-control': 'public, max-age=86400' });
    res.end(buf);
    return;
  }
  res.writeHead(404).end('not found');
}

http.createServer(async (req, res) => {
  const urlObj = new URL(req.url, 'http://127.0.0.1');
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const bodyBuf = Buffer.concat(chunks);

  try {
    if (urlObj.pathname === '/graphql') return handleGraphql(req, res, urlObj, bodyBuf);
    if (urlObj.pathname.startsWith('/media/')) return handleMedia(req, res, urlObj);

    let file = path.join(APP, decodeURIComponent(urlObj.pathname));
    if (!file.startsWith(APP)) { res.writeHead(403).end('forbidden'); return; }
    let stat = await fs.stat(file).catch(() => null);
    if (!stat || stat.isDirectory()) {
      const idx = path.join(file, 'index.html');
      if (await exists(idx)) { file = idx; stat = await fs.stat(idx); }
    }
    if (!stat) {
      // SPA 回退：任何前端路由都返回同一份 shell
      const shell = path.join(APP, 'index.html');
      const buf = await fs.readFile(shell);
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
      res.end(rewriteMediaUrls(buf.toString('utf8')));
      return;
    }
    const buf = await fs.readFile(file);
    const isHtml = path.extname(file) === '.html';
    res.writeHead(200, {
      'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'cache-control': isHtml ? 'no-store' : 'public, max-age=31536000, immutable',
    });
    res.end(isHtml ? rewriteMediaUrls(buf.toString('utf8')) : buf);
  } catch (e) {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' }).end(String(e && e.stack || e));
  }
}).listen(PORT, () => console.log('1:1 镜像预览: http://127.0.0.1:' + PORT));

// scripts/app/05-build-pages.mjs —— 生成 Cloudflare Pages 工程（原站应用 + Functions + R2 绑定）
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from '../lib/api.mjs';

const APP = path.join(ROOT, 'app');
const OUT = path.join(ROOT, 'pages');
const DIST = path.join(OUT, 'dist');
const FN = path.join(OUT, 'functions');

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(DIST, { recursive: true });
await fs.mkdir(path.join(FN, 'media'), { recursive: true });

// ---------- 1. 拷贝应用本体 ----------
async function copyDir(src, dst) {
  await fs.mkdir(dst, { recursive: true });
  for (const e of await fs.readdir(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) await copyDir(s, d);
    else await fs.copyFile(s, d);
  }
}
await copyDir(APP, DIST);

// ---------- 2. 外壳里的图片后端改成同源 ----------
const shellPath = path.join(DIST, 'index.html');
let shell = await fs.readFile(shellPath, 'utf8');
shell = shell
  .replace(/data-media-backend="https:\/\/www\.mannings\.com\.hk\/media\/"/g, 'data-media-backend="/media/"')
  .replace(/data-media-backend="https:\/\/mannings\.com\.hk\/media\/"/g, 'data-media-backend="/media/"');
await fs.writeFile(shellPath, shell, 'utf8');

// ---------- 3. SPA 回退 + 函数路由 ----------
await fs.writeFile(path.join(DIST, '_redirects'), '/*  /index.html  200\n', 'utf8');
await fs.writeFile(path.join(DIST, '_routes.json'), JSON.stringify({
  version: 1,
  include: ['/graphql', '/media/*'],
  exclude: [],
}, null, 1), 'utf8');

// ---------- 4. /graphql 函数：R2 快照优先，未命中回源并落盘 ----------
const graphqlFn = `// Cloudflare Pages Function: /graphql
// 1) 先取 R2 快照（键 = operationName + 规范化 variables，与本地预热一致）
// 2) 未命中则回源 mannings.com.hk，成功即写入 R2
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const CACHE_ID = '62d2b26f1cda94c69aaada85b80382dd2b6853d7cb6160fbbb0af49892021962';

function canonical(v) {
  if (v == null) return {};
  if (typeof v === 'string') { try { v = JSON.parse(v); } catch { return {}; } }
  const sort = (o) => Array.isArray(o) ? o.map(sort)
    : (o && typeof o === 'object') ? Object.keys(o).sort().reduce((a, k) => { a[k] = sort(o[k]); return a; }, {}) : o;
  return sort(v);
}

async function keyFor(op, vars, query) {
  const data = op
    ? 'op|' + op + '|' + JSON.stringify(canonical(vars))
    : 'anon|' + JSON.stringify(canonical(vars)) + '|' + String(query || '').replace(/\\s+/g, ' ').trim();
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

function rewriteMediaUrls(text) {
  return text
    .replace(/https:\\\\\\/\\\\\\/www\\.mannings\\.com\\.hk\\\\\\/media\\\\\\//g, '\\\\/media\\\\/')
    .replace(/https:\\\\\\/\\\\\\/mannings\\.com\\.hk\\\\\\/media\\\\\\//g, '\\\\/media\\\\/')
    .replace(/https:\\/\\/www\\.mannings\\.com\\.hk\\/media\\//g, '/media/')
    .replace(/https:\\/\\/mannings\\.com\\.hk\\/media\\//g, '/media/');
}

const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=300' };

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  let op, vars, query;

  if (request.method === 'POST') {
    try { const j = await request.json(); op = j.operationName; vars = j.variables; query = j.query; } catch (e) { op = undefined; }
  } else {
    op = url.searchParams.get('operationName');
    vars = url.searchParams.get('variables');
    query = url.searchParams.get('query');
  }

  const key = await keyFor(op, vars, query);

  if (env.MEDIA) {
    const hit = await env.MEDIA.get('graphql/' + key + '.json');
    if (hit) return new Response(rewriteMediaUrls(await hit.text()), { headers: { ...JSON_HEADERS, 'x-mirror': 'snapshot' } });
  }

  // 回源
  try {
    const up = new URL('https://www.mannings.com.hk/graphql');
    if (query) up.searchParams.set('query', String(query));
    if (op) up.searchParams.set('operationName', String(op));
    up.searchParams.set('variables', typeof vars === 'string' ? vars : JSON.stringify(vars || {}));
    const r = await fetch(up.toString(), {
      method: 'GET',
      headers: {
        'user-agent': UA, store: 'zh_HK', accept: '*/*', 'content-type': 'application/json',
        origin: 'https://www.mannings.com.hk', referer: 'https://www.mannings.com.hk/zh-hant/',
        'accept-language': 'zh-HK,zh;q=0.9,en;q=0.8', 'x-magento-cache-id': CACHE_ID,
        'sec-fetch-site': 'same-origin', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty',
      },
    });
    const text = await r.text();
    if (r.ok) {
      if (env.MEDIA) context.waitUntil(env.MEDIA.put('graphql/' + key + '.json', text));
      return new Response(rewriteMediaUrls(text), { headers: { ...JSON_HEADERS, 'x-mirror': 'live' } });
    }
    return new Response(JSON.stringify({ errors: [{ message: 'mirror upstream ' + r.status }] }), { status: 502, headers: JSON_HEADERS });
  } catch (e) {
    return new Response(JSON.stringify({ errors: [{ message: 'mirror upstream error: ' + String(e) }] }), { status: 502, headers: JSON_HEADERS });
  }
}
`;
await fs.writeFile(path.join(FN, 'graphql.js'), graphqlFn, 'utf8');

// ---------- 5. /media/* 函数：R2 原图优先 ----------
const mediaFn = `// Cloudflare Pages Function: /media/*
// R2 里存的是原站原始图片（键 = media/<原路径>），命中即直出；未命中回源并写回 R2
const MIME = {
  webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif',
  svg: 'image/svg+xml', ico: 'image/x-icon', pdf: 'application/pdf', webp2: 'image/webp',
};

export async function onRequest(context) {
  const { request, env, params } = context;
  const url = new URL(request.url);
  const rest = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const key = 'media/' + rest;
  const ext = (rest.split('.').pop() || '').toLowerCase();

  if (env.MEDIA) {
    const obj = await env.MEDIA.get(key);
    if (obj) {
      return new Response(obj.body, {
        headers: {
          'content-type': obj.httpMetadata?.contentType || MIME[ext] || 'application/octet-stream',
          'cache-control': 'public, max-age=31536000, immutable',
          etag: obj.httpEtag,
        },
      });
    }
    if (/^(jpe?g|png)$/i.test(ext)) {
      const alt = await env.MEDIA.get(key.replace(/\\.(jpe?g|png)$/i, '.webp'));
      if (alt) {
        return new Response(alt.body, {
          headers: { 'content-type': 'image/webp', 'cache-control': 'public, max-age=31536000, immutable', etag: alt.httpEtag },
        });
      }
    }
  }

  try {
    const r = await fetch('https://www.mannings.com.hk/media/' + rest + url.search, {
      headers: { referer: 'https://www.mannings.com.hk/zh-hant/', accept: 'image/avif,image/webp,*/*' },
    });
    if (!r.ok) return new Response('not found', { status: 404 });
    const buf = await r.arrayBuffer();
    if (env.MEDIA) context.waitUntil(env.MEDIA.put(key, buf, { httpMetadata: { contentType: r.headers.get('content-type') || MIME[ext] || 'image/jpeg' } }));
    return new Response(buf, {
      headers: { 'content-type': r.headers.get('content-type') || MIME[ext] || 'image/jpeg', 'cache-control': 'public, max-age=86400' },
    });
  } catch (e) {
    return new Response('mirror media error', { status: 502 });
  }
}
`;
await fs.writeFile(path.join(FN, 'media', '[[path]].js'), mediaFn, 'utf8');

// ---------- 6. wrangler 配置 ----------
const wrangler = `name = "mannings-hk"
compatibility_date = "2026-11-01"
pages_build_output_dir = "dist"

[[r2_buckets]]
binding = "MEDIA"
bucket_name = "mannings-mirror"
`;
await fs.writeFile(path.join(OUT, 'wrangler.toml'), wrangler, 'utf8');

// ---------- 7. 统计 ----------
async function size(p) {
  let total = 0, count = 0;
  for (const e of await fs.readdir(p, { withFileTypes: true })) {
    const f = path.join(p, e.name);
    if (e.isDirectory()) { const s = await size(f); total += s.total; count += s.count; }
    else { total += (await fs.stat(f)).size; count++; }
  }
  return { total, count };
}
const s = await size(DIST);
console.log('dist:', s.count, 'files,', (s.total / 1048576).toFixed(1), 'MB');
console.log('functions:', (await fs.readdir(FN)).join(', '), '+ media/');
console.log('pages 工程已生成:', OUT);

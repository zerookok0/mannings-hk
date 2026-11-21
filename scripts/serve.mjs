// scripts/serve.mjs —— 本地预览静态镜像站
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from './lib/api.mjs';

const SITE = path.join(ROOT, 'site');
const PORT = Number(process.env.PORT || 8787);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.csv': 'text/csv; charset=utf-8',
};

http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    let file = path.join(SITE, p);
    if (!file.startsWith(SITE)) { res.writeHead(403).end('forbidden'); return; }
    let stat = await fs.stat(file).catch(() => null);
    if (stat && stat.isDirectory()) { file = path.join(file, 'index.html'); stat = await fs.stat(file).catch(() => null); }
    if (!stat) {
      const fallback = file + '.html';
      const s2 = await fs.stat(fallback).catch(() => null);
      if (s2) { file = fallback; stat = s2; } else { res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' }).end('<h1>404</h1><p>' + p + '</p>'); return; }
    }
    const data = await fs.readFile(file);
    res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-cache' });
    res.end(data);
  } catch (e) {
    res.writeHead(500).end(String(e));
  }
}).listen(PORT, () => console.log('镜像站预览： http://127.0.0.1:' + PORT));

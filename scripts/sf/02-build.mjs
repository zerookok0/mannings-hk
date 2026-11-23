// scripts/sf/02-build.mjs —— 组装店铺 dist（应用 + 数据 + 路由/缓存头）
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from '../lib/api.mjs';

const SRC = path.join(ROOT, 'sf', 'src');
const DATA = path.join(ROOT, 'sf', 'data');
const DIST = path.join(ROOT, 'sf', 'dist');

await fs.rm(DIST, { recursive: true, force: true });
await fs.mkdir(DIST, { recursive: true });

await fs.cp(SRC, DIST, { recursive: true });
await fs.cp(DATA, path.join(DIST, 'data'), { recursive: true });

await fs.writeFile(path.join(DIST, '_headers'), [
  '/index.html', '  Cache-Control: no-cache',
  '/app.js', '  Cache-Control: no-cache',
  '/*.css', '  Cache-Control: no-cache',
  '/data/*', '  Cache-Control: public, max-age=600',
  '',
].join(String.fromCharCode(10)), 'utf8');

await fs.writeFile(path.join(DIST, '_redirects'), ['/*  /index.html  200', ''].join(String.fromCharCode(10)), 'utf8');

async function walk(dir, base = '') {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), rel)));
    else out.push(rel);
  }
  return out;
}
const files = await walk(DIST);
let bytes = 0;
for (const f of files) bytes += (await fs.stat(path.join(DIST, f))).size;
console.log('dist:', files.length, 'files,', (bytes / 1048576).toFixed(1), 'MB');

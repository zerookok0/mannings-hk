// scripts/app/05-build-pages.mjs —— 生成「纯静态」Cloudflare Pages 工程
// 该账号的 Pages 不执行 Functions/_worker.js，因此全部逻辑放进 Service Worker：
//   /graphql  -> 静态快照 dist/snap/<key>.json
//   /media/*  -> 本地静态图，缺失则回源原站（no-cors，视觉一致）
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT, DATA, readJson } from '../lib/api.mjs';

const APP = path.join(ROOT, 'app');
const OUT = path.join(ROOT, 'pages');
const DIST = path.join(OUT, 'dist');
const SNAP_SRC = path.join(ROOT, 'cache', 'graphql');
const MEDIA_SRC = path.join(ROOT, 'site', 'media');

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(DIST, { recursive: true });

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

// 1) 外壳：图片后端同源 + 注册镜像 Service Worker
const shellPath = path.join(DIST, 'index.html');
let shell = await fs.readFile(shellPath, 'utf8');
shell = shell
  .replace(/data-media-backend="https:\/\/www\.mannings\.com\.hk\/media\/"/g, 'data-media-backend="/media/"')
  .replace(/data-media-backend="https:\/\/mannings\.com\.hk\/media\/"/g, 'data-media-backend="/media/"');
if (!shell.includes('sw-mirror')) {
  const boot = '<script>(function(){if(!("serviceWorker" in navigator))return;'
    + 'navigator.serviceWorker.register("/sw-mirror.js").then(function(){return navigator.serviceWorker.ready}).then(function(){'
    + 'if(!navigator.serviceWorker.controller){try{if(!sessionStorage.getItem("mn-sw-boot")){sessionStorage.setItem("mn-sw-boot","1");location.reload();}}catch(e){}}'
    + '}).catch(function(){});})();</script>';
  shell = shell.replace('</head>', boot + '</head>');
}
await fs.writeFile(shellPath, shell, 'utf8');

// 2) 快照 -> dist/snap/*.json
await fs.mkdir(path.join(DIST, 'snap'), { recursive: true });
let snapCount = 0;
for (const f of await fs.readdir(SNAP_SRC)) {
  if (!f.endsWith('.json') || f.startsWith('_')) continue;
  await fs.copyFile(path.join(SNAP_SRC, f), path.join(DIST, 'snap', f));
  snapCount++;
}

// 3) 图片：首页/列表主图 + 横幅（控制文件数在 Pages 2 万限制内）
const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const wanted = new Set();
for (const p of catalog.products) {
  if (p.image) {
    const u = String(p.image).split('?')[0];
    if (u.includes('/media/')) wanted.add(u.slice(u.indexOf('/media/') + 7).replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  }
}
const mediaDir = path.join(DIST, 'media');
let mediaCount = 0;
for (const rel of wanted) {
  const src = path.join(MEDIA_SRC, rel);
  try {
    const dst = path.join(mediaDir, rel);
    await fs.mkdir(path.dirname(dst), { recursive: true });
    await fs.copyFile(src, dst);
    mediaCount++;
  } catch { }
}
// 横幅/图标（wysiwyg、site 目录全部带上）
for (const sub of ['wysiwyg', 'site']) {
  const src = path.join(MEDIA_SRC, sub);
  try {
    await copyDir(src, path.join(mediaDir, sub));
    for (const f of await walkCount(path.join(mediaDir, sub))) mediaCount++;
  } catch { }
}

// 4) 镜像 Service Worker（覆盖原站 sw.js 路径，确保被注册）
const sw = `/* 万宁镜像 Service Worker：/graphql 走静态快照，/media 缺失回源 */
const VERSION = 'mn-mirror-v2';
const LOG = [];
const ORIGIN = 'https://www.mannings.com.hk';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

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

// 缺快照时的最小合法空响应，避免整页报错
const EMPTY = {
  Megamenu: { data: { megamenu: null } },
  getStoreConfigData: { data: { storeConfig: {} } },
  getAvailableStoresData: { data: { availableStores: [] } },
  searchTrending: { data: { searchTrending: { top_brands: [], top_categories: [], hot_products: [] } } },
  SearchQueries: { data: { searchQueries: [] } },
  cmsBlocks: { data: { cmsBlocks: { items: [] } } },
  ResolveURL: { data: { route: null } },
  GetRegion: { data: { countries: [] } },
  GetStoresInfo: { data: { runStoreInfo: { code: '0000', msg: 'mirror', data: { items: [] } } } },
  getProductsByUrlKey: { data: { productsV3: { items: [], total_count: 0 } } },
  getProductDetailForProductPage: { data: { productsV3: { items: [], enable_store_inventory_check: false } } },
  GetBreadcrumbs: { data: { categories: { items: [] } } },
  getCategoryData: { data: { categories: { items: [] } } },
  getCouponListing: { data: { rules: { items: [], totalCount: 0, pageSize: 0, currentPage: 1 } } },
  getHotPosts: { data: { blogPosts: { items: [], total_count: 0, total_pages: 0 } } },
  getPostListQueryByProductId: { data: { blogPosts: { items: [], total_count: 0, total_pages: 0 } } },
  GetCmsPage: { data: { cmsPage: null } },
  getProductDetailForReturnAndRefund: { data: { cmsBlocks: { items: [] } } },
  GetWishlistConfigForProductAC: { data: { storeConfig: {} } },
};
async function handleGraphql(request) {
  const url = new URL(request.url);
  let op, vars, query;
  if (request.method === 'POST') {
    try { const j = await request.clone().json(); op = j.operationName; vars = j.variables; query = j.query; } catch (e) { op = undefined; }
  } else {
    op = url.searchParams.get('operationName');
    vars = url.searchParams.get('variables');
    query = url.searchParams.get('query');
  }
  const key = await keyFor(op, vars, query);
  LOG.push({ op: op || null, vars: typeof vars === 'string' ? vars : JSON.stringify(vars), key: key.slice(0, 8) });
  if (LOG.length > 300) LOG.shift();
  try {
    const r = await fetch('/snap/' + key + '.json', { cache: 'force-cache' });
    const ct = r.headers.get('content-type') || '';
    if (r.ok && ct.includes('json')) {
      const text = await r.text();
      return new Response(text, { headers: { 'content-type': 'application/json; charset=utf-8', 'x-mirror': 'snapshot' } });
    }
  } catch (e) { }
  const fallback = (op && EMPTY[op]) ? EMPTY[op] : { data: null };
  return new Response(JSON.stringify(fallback), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'x-mirror': 'fallback' },
  });
}

async function handleMedia(request) {
  const url = new URL(request.url);
  // 1) 本地 .webp
  const webp = url.pathname.replace(/\\.(jpg|jpeg|png)$/i, '.webp');
  try {
    const r = await fetch(webp, { cache: 'force-cache' });
    if (r.ok) return r;
  } catch (e) { }
  // 2) 原站回源（图片不需要 CORS）
  try {
    return await fetch(ORIGIN + url.pathname + url.search, { mode: 'no-cors', cache: 'force-cache' });
  } catch (e) {
    return new Response('', { status: 404 });
  }
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === '/_mirror-log') { event.respondWith(new Response(JSON.stringify(LOG), { headers: { 'content-type': 'application/json' } })); return; }
  if (url.pathname === '/graphql') { event.respondWith(handleGraphql(event.request)); return; }
  if (url.pathname.startsWith('/media/')) { event.respondWith(handleMedia(event.request)); return; }
});
`;
await fs.writeFile(path.join(DIST, 'sw-mirror.js'), sw, 'utf8');
await fs.writeFile(path.join(DIST, 'sw.js'), sw, 'utf8');

async function walkCount(dir) {
  let out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(await walkCount(f));
    else out.push(f);
  }
  return out;
}

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
console.log('快照:', snapCount, '| 主图:', mediaCount);
console.log('pages 工程已生成（纯静态 + Service Worker）:', OUT);

// scripts/02-media-plan.mjs —— 生成图片下载任务清单（本地 .webp 派生图）
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA, ROOT, readJson, writeJson } from './lib/api.mjs';

const RAW = path.join(DATA, 'raw');
const SITE = path.join(ROOT, 'site');
const IMG_W = 500;      // 商品图派生宽高
const BANNER_W = 1400;  // CMS 横幅派生宽

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const details = await readJson(path.join(DATA, 'details.json'), {});
if (!catalog) { console.error('先运行 01-normalize.mjs'); process.exit(1); }

const jobs = new Map(); // localPath -> {url, file}
const ORIGIN = 'https://www.mannings.com.hk';

function addProductImage(url, width) {
  if (!url) return null;
  const u = url.split('?')[0];
  if (!u.includes('/media/')) return null;
  const rel = u.slice(u.indexOf('/media/') + 1); // media/catalog/product/xx/y.jpg
  const ext = path.extname(rel).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return null;
  const local = 'site/' + rel.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
  if (!jobs.has(local)) {
    jobs.set(local, { url: `${u}?optimize=high&fit=bounds&height=${width}&width=${width}&format=webp`, file: local });
  }
  return '/' + local.replace(/^site\//, '');
}

// 1. 商品主图 + 图集
let primaryCount = 0, galleryCount = 0;
for (const p of catalog.products) {
  const localPrimary = addProductImage(p.image, IMG_W);
  if (localPrimary) { p.imageLocal = localPrimary; primaryCount++; }
  const d = details[p.sku];
  const gallery = [];
  for (const g of d?.gallery || []) {
    const url = ORIGIN + '/media/catalog/product' + g.file;
    const local = addProductImage(url, IMG_W);
    if (local && !gallery.includes(local)) gallery.push(local);
  }
  if (localPrimary && !gallery.includes(localPrimary)) gallery.unshift(localPrimary);
  p.galleryLocal = gallery;
  galleryCount += gallery.length;
}

// 2. CMS / 菜单 里的图片
const htmlSources = [];
for (const f of await fs.readdir(path.join(RAW, 'cms'))) {
  if (!f.endsWith('.json')) continue;
  const j = await readJson(path.join(RAW, 'cms', f), null);
  if (j?.data?.cmsPage?.content) htmlSources.push(j.data.cmsPage.content);
}
const mega = await readJson(path.join(RAW, 'meta', 'megamenu.json'), null);
if (mega) htmlSources.push(JSON.stringify(mega));

const bannerJobs = new Map();
for (const html of htmlSources) {
  for (const m of html.matchAll(/(?:https?:\/\/www\.mannings\.com\.hk)?(\/media\/[^"'\s)\\]+?\.(?:jpg|jpeg|png|webp|gif|svg))/gi)) {
    const rel = m[1].slice(1); // media/...
    const ext = path.extname(rel).toLowerCase();
    if (ext === '.gif' || ext === '.svg') {
      const local = 'site/' + rel;
      if (!bannerJobs.has(local)) bannerJobs.set(local, { url: ORIGIN + '/' + rel, file: local });
    } else {
      const local = 'site/' + rel.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
      if (!bannerJobs.has(local)) bannerJobs.set(local, { url: `${ORIGIN}/${rel}?optimize=high&fit=bounds&width=${BANNER_W}&format=webp`, file: local });
    }
  }
}

// 3. 站点基础资源
const staticJobs = [
  { url: ORIGIN + '/mannings-j7X.svg', file: 'site/media/site/mannings-logo.svg' },
  { url: ORIGIN + '/venia-static-assets/favicon.ico', file: 'site/media/site/favicon.ico' },
  { url: ORIGIN + '/venia-static/icons/mannings.png', file: 'site/media/site/mannings-icon.png' },
];

const all = [];
let i = 0;
for (const j of [...jobs.values(), ...bannerJobs.values(), ...staticJobs]) {
  all.push({ id: 'm' + (++i).toString().padStart(5, '0'), ...j });
}
await writeJson(path.join(RAW, 'media-jobs.json'), all);

// 站点索引（轻量）
await writeJson(path.join(DATA, 'catalog-lite.json'), {
  totalCount: catalog.totalCount,
  products: catalog.products.map((p) => ({
    sku: p.sku, n: p.name, u: p.urlKey, i: p.imageLocal, b: p.brand,
    f: p.price.final, r: p.price.regular, d: p.price.discount, s: p.productSize, st: p.inStock,
  })),
});

console.log('product images:', primaryCount, '| gallery refs:', galleryCount);
console.log('cms/static images:', bannerJobs.size + staticJobs.length);
console.log('total media jobs:', all.length);
const est = all.length * 9 / 1024;
console.log('estimated size ~', est.toFixed(0), 'MB');

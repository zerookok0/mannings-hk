// scripts/05-verify.mjs —— 镜像站自检：页面数量 / 死链 / 缺图 / SKU 覆盖
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT, readJson } from './lib/api.mjs';

const SITE = path.join(ROOT, 'site');
const catalog = await readJson(path.join(SITE, 'data', 'catalog.json'), null);
const problems = { missingPage: [], missingAsset: [], badLink: [] };
let pages = 0, imgs = 0, checkedLinks = 0;

const exists = async (p) => { try { await fs.stat(p); return true; } catch { return false; } };
const norm = (hrefPath) => path.join(SITE, decodeURIComponent(hrefPath));

// 1. 遍历 HTML
async function walk(dir, acc = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'media' || e.name === 'assets' || e.name === 'data') continue;
      await walk(p, acc);
    } else if (e.name.endsWith('.html')) acc.push(p);
  }
  return acc;
}
const htmlFiles = await walk(SITE);
pages = htmlFiles.length;

for (const f of htmlFiles) {
  const html = await fs.readFile(f, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="(\/[^"#?]+)(?:[?#][^"]*)?"/g)].map((m) => m[1]);
  for (const r of new Set(refs)) {
    checkedLinks++;
    if (r.startsWith('/media/')) { imgs++; if (!(await exists(norm(r)))) problems.missingAsset.push(r); continue; }
    if (r.startsWith('/assets/')) { if (!(await exists(norm(r)))) problems.missingAsset.push(r); continue; }
    if (r.startsWith('/data/')) { if (!(await exists(norm(r)))) problems.missingAsset.push(r); continue; }
    if (!(await exists(norm(r)))) problems.badLink.push(`${path.relative(SITE, f)} -> ${r}`);
  }
}

// 2. SKU 覆盖
const missingSku = [];
for (const p of catalog.products) {
  if (!(await exists(path.join(SITE, 'p', `${p.sku}.html`)))) missingSku.push(p.sku);
}

// 3. 图片文件数
let mediaCount = 0, mediaBytes = 0;
async function countMedia(dir) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await countMedia(p);
    else { mediaCount++; const s = await fs.stat(p); mediaBytes += s.size; }
  }
}
await countMedia(path.join(SITE, 'media'));

const uniqAssets = [...new Set(problems.missingAsset)];
const report = {
  pages,
  products: catalog.products.length,
  missingProductPages: missingSku.length,
  linksChecked: checkedLinks,
  imageRefs: imgs,
  mediaFiles: mediaCount,
  mediaMB: +(mediaBytes / 1048576).toFixed(1),
  missingAssets: uniqAssets.length,
  missingAssetSample: uniqAssets.slice(0, 12),
  badLinks: problems.badLink.length,
  badLinkSample: problems.badLink.slice(0, 12),
};
console.log(JSON.stringify(report, null, 1));

const ok = missingSku.length === 0 && uniqAssets.length === 0 && problems.badLink.length === 0;
console.log(ok ? '✅ 自检通过：页面/图片/内链全部闭合' : '⚠️ 存在缺口，见上方统计');

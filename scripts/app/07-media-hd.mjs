// scripts/app/07-media-hd.mjs —— 生成 1:1 图片集（1000px webp 派生，键与原站路径一致）
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { ROOT, DATA, readJson, writeJson } from '../lib/api.mjs';

const ORIGIN = 'https://www.mannings.com.hk';
const OUT_ROOT = path.join(ROOT, 'media-hd');
const JOBS = path.join(DATA, 'raw', 'media-hd-jobs.json');
const SIZE = 1000;

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const details = await readJson(path.join(DATA, 'details.json'), {});
if (!catalog) { console.error('缺少 data/catalog.json'); process.exit(1); }

const jobs = new Map();
function add(url) {
  if (!url) return;
  const u = String(url).split('?')[0];
  if (!u.includes('/media/')) return;
  const rel = u.slice(u.indexOf('/media/') + 1); // catalog/product/xx/y.jpg 或 wysiwyg/xx.png
  if (!/\.(jpg|jpeg|png|webp)$/i.test(rel)) return;
  const local = path.join(OUT_ROOT, rel);
  if (jobs.has(local)) return;
  jobs.set(local, {
    id: 'h' + jobs.size.toString().padStart(5, '0'),
    url: `${ORIGIN}/media/${rel}?optimize=high&fit=bounds&height=${SIZE}&width=${SIZE}&format=webp`,
    file: 'media-hd/' + rel.split('\\').join('/'),
  });
}

for (const p of catalog.products) {
  add(p.image);
  for (const g of details[p.sku]?.gallery || []) add(ORIGIN + '/media/catalog/product' + g.file);
}

// CMS / 菜单里出现的图片（横幅、图标、品牌 logo）
const htmlSources = [];
for (const f of await fs.readdir(path.join(DATA, 'raw', 'cms'))) {
  if (!f.endsWith('.json')) continue;
  const j = await readJson(path.join(DATA, 'raw', 'cms', f), null);
  if (j?.data?.cmsPage?.content) htmlSources.push(j.data.cmsPage.content);
}
const mega = await readJson(path.join(DATA, 'raw', 'meta', 'megamenu.json'), null);
if (mega) htmlSources.push(JSON.stringify(mega));
for (const html of htmlSources) {
  for (const m of html.matchAll(/(?:https?:\/\/www\.mannings\.com\.hk)?(\/media\/[^"'\s)\\;]+?\.(?:jpg|jpeg|png|webp))/gi)) add(m[1]);
}

const list = [...jobs.values()];
await writeJson(JOBS, list);
let have = 0;
for (const j of list) { try { await fs.stat(path.join(ROOT, j.file)); have++; } catch {} }
console.log('图片任务:', list.length, '| 已有:', have, '| 待抓:', list.length - have);

await new Promise((resolve, reject) => {
  const p = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts/ps/fetch.ps1',
    '-Stage', 'media', '-JobsFile', JOBS, '-Concurrency', '10', '-Retries', '5'], { cwd: ROOT, stdio: 'inherit' });
  p.on('close', (c) => (c === 0 ? resolve() : reject(new Error('ps exit ' + c))));
});

let bytes = 0, count = 0;
async function walk(dir) {
  let ents = [];
  try { ents = await fs.readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const e of ents) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) await walk(f);
    else { count++; bytes += (await fs.stat(f)).size; }
  }
}
await walk(OUT_ROOT);
console.log('media-hd:', count, 'files,', (bytes / 1048576).toFixed(0), 'MB');

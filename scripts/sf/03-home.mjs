// scripts/sf/03-home.mjs —— 从原站首页 CMS 内容里提取轮播 banner / 促销条 / 双图位
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT, DATA, readJson } from '../lib/api.mjs';

const API = 'https://mannings-api.mating.workers.dev';
const cms = await readJson(path.join(DATA, 'raw', 'cms', 'home.json'), null);
const html = cms?.data?.cmsPage?.content || '';
if (!html) { console.error('缺少 home CMS 内容'); process.exit(1); }

const LOCAL = new Set([
  'mannings-payme-offer', 'promotions', 'mannings_exclusive', 'offers/one-day-special', 'offers/newarrivals',
  'offers/yuu-offers', 'pharmacy-services', 'gen-m-women-health', 'brandzone', 'health', 'travelessentials',
  'partners', 'eCoupons', 'store-finder',
]);

function href(raw) {
  let h = String(raw || '').replace(/&amp;/g, '&');
  h = h.replace(/^https?:\/\/www\.mannings\.com\.hk/, '');
  const clean = h.split('?')[0].replace(/\/$/, '');
  if (/^\/c\//.test(clean)) return '#/c/' + encodeURIComponent(clean.replace(/^\/c\//, ''));
  if (/\/p\/\d+$/.test(clean)) return '#/p/' + clean.split('/').pop();
  const m = clean.match(/^\/offers\/([a-z0-9\-]+)$/i);
  if (m) return '#/offers/' + m[1];
  const slug = clean.replace(/^\//, '');
  if (LOCAL.has(slug)) return '#/info/' + encodeURIComponent(slug);
  if (/^brands\/.+/.test(clean)) return '#/search?q=' + encodeURIComponent(clean.split('/').pop());
  return '#/search?q=';
}

const imgUrl = (src, w) => {
  const s = String(src || '').split('?')[0];
  const i = s.indexOf('/media/');
  const rel = i >= 0 ? s.slice(i) : s;
  return API + rel + `?optimize=high&fit=bounds&width=${w}&format=webp`;
};

// 按出现顺序取 <a><img> 组合
const pairs = [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>\s*<img[^>]+src="([^"]+)"/gi)]
  .map((m) => ({ href: href(m[1]), img: m[2] }));

// 去重（同图只留一次）
const seen = new Set();
const uniq = [];
for (const p of pairs) {
  const key = p.img.split('?')[0];
  if (seen.has(key)) continue;
  seen.add(key);
  uniq.push(p);
}

const banners = uniq.slice(0, 8).map((p) => ({ img: imgUrl(p.img, 1940), href: p.href }));
const tiles = uniq.slice(8, 10).map((p) => ({ img: imgUrl(p.img, 960), href: p.href }));

const data = {
  strip: [
    { text: '立即成為新會員即享 $45 折扣', href: '#/login' },
    { text: '電子優惠券專區', href: '#/search?q=' },
    { text: '重要安全提示', href: '#/info/important-security-alert' },
  ],
  banners,
  tiles,
};

await fs.mkdir(path.join(ROOT, 'sf', 'data'), { recursive: true });
await fs.writeFile(path.join(ROOT, 'sf', 'data', 'home.json'), JSON.stringify(data), 'utf8');
console.log('banners:', banners.length, '| tiles:', tiles.length, '| strip:', data.strip.length);
console.log('banner0:', banners[0]?.img?.slice(0, 110));
console.log('tile0  :', tiles[0]?.img?.slice(0, 110));

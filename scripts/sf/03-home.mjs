// scripts/sf/03-home.mjs —— 原站首页：PageBuilder slider 大图轮播 + 促销条 + 双图位
// 关键发现：首页大图是 slide 的 CSS 背景图（data-background-images），不是 <img>
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT, DATA, readJson } from '../lib/api.mjs';

const API = 'https://mannings-api.mating.workers.dev';
const BV = 'bv=20261124b';
const cms = await readJson(path.join(DATA, 'raw', 'cms', 'home.json'), null);
const html = cms?.data?.cmsPage?.content || '';
if (!html) { console.error('缺少 home CMS 内容'); process.exit(1); }

const LOCAL = new Set([
  'mannings-payme-offer', 'promotions', 'mannings_exclusive', 'offers/one-day-special', 'offers/newarrivals',
  'offers/yuu-offers', 'pharmacy-services', 'gen-m-women-health', 'brandzone', 'health', 'travelessentials',
  'eCoupons', 'store-finder',
]);

function href(raw) {
  const h = String(raw || '').replace(/&amp;/g, '&').replace(/^https?:\/\/www\.mannings\.com\.hk/, '');
  const q = h.split('?')[1] || '';
  const clean = h.split('?')[0].replace(/\/$/, '');
  if (/^\/partners/.test(clean)) {
    const m = q.match(/promotion_facets=([^&]+)/);
    if (m) return '#/search?promo=' + encodeURIComponent(decodeURIComponent(m[1].replace(/\+/g, ' ')));
    return '#/search?q=';
  }
  if (/^\/c\//.test(clean)) return '#/c/' + encodeURIComponent(clean.replace(/^\/c\//, ''));
  if (/\/p\/\d+$/.test(clean)) return '#/p/' + clean.split('/').pop();
  const slug = clean.replace(/^\//, '');
  if (LOCAL.has(slug)) return '#/info/' + encodeURIComponent(slug);
  if (/^brands\//.test(slug)) return '#/search?q=' + encodeURIComponent(slug.split('/').filter(Boolean).pop());
  return '#/search?q=';
}

const imgUrl = (src, w) => {
  const s = String(src || '').split('?')[0];
  const i = s.indexOf('/media/');
  const rel = i >= 0 ? s.slice(i) : s;
  return API + rel + `?optimize=high&fit=bounds&width=${w}&format=webp&${BV}`;
};

// ---------- 1) 大图轮播：取第一个 slider 内的 slide 背景图 ----------
const s0 = html.indexOf('data-content-type="slider"');
const s1 = html.indexOf('data-content-type="slider"', s0 >= 0 ? s0 + 10 : 0);
const sliderHtml = s0 >= 0 ? html.slice(s0, s1 > s0 ? s1 : html.length) : '';

const slides = [];
const seen = new Set();
const slideRe = /data-content-type="slide"([\s\S]*?)(?=data-content-type="slide"|$)/gi;
let sm;
while ((sm = slideRe.exec(sliderHtml))) {
  const seg = sm[1];
  const bgRaw = (seg.match(/data-background-images="([^"]*)"/) || [])[1];
  if (!bgRaw) continue;
  let bg = {};
  try { bg = JSON.parse(bgRaw.replace(/&quot;/g, '"').replace(/\\"/g, '"')); } catch { continue; }
  const d = bg.desktop_image || bg.mobile_image;
  const m = bg.mobile_image || bg.desktop_image;
  if (!d || seen.has(d)) continue;
  seen.add(d);
  const a = (seg.match(/<a[^>]+href="([^"]+)"/i) || [])[1] || '';
  slides.push({ href: href(a), d, m });
}

// ---------- 2) 双图位：竖图（宽高比 < 1.5）----------
function dims(tag) {
  const raw = ((tag.match(/data-image-dimensions="([^"]*)"/) || [])[1] || '').replace(/&quot;/g, '"');
  try { const o = JSON.parse(raw); return { w: Number(o.width) || 0, h: Number(o.height) || 0 }; } catch { return { w: 0, h: 0 }; }
}
const portraits = [];
const pSeen = new Set();
const imgRe = /<img[^>]*>/gi;
let im;
while ((im = imgRe.exec(html))) {
  const tag = im[0];
  if (!/pagebuilder-mobile-hidden/.test(tag)) continue;
  const src = (tag.match(/src="([^"]+)"/) || [])[1];
  if (!src || pSeen.has(src)) continue;
  const { w, h } = dims(tag);
  if (!w || !h) continue;
  const ratio = w / h;
  if (ratio >= 1.5) continue;
  pSeen.add(src);
  const before = html.slice(0, im.index);
  const anchors = [...before.matchAll(/<a[^>]+href="([^"]+)"/gi)];
  portraits.push({ href: href(anchors.length ? anchors[anchors.length - 1][1] : ''), d: src, w, h, ratio, area: w * h });
}

// ---------- 3) 输出 ----------
const data = {
  strip: [
    { text: '立即成為新會員即享 $45 折扣', href: '#/login' },
    { text: '電子優惠券專區', href: '#/search?q=' },
    { text: '重要安全提示', href: '#/info/important-security-alert' },
  ],
  // slider 大图：原图 1940x970（比例 2:1）
  banners: slides.slice(0, 8).map((s) => ({ href: s.href, d: imgUrl(s.d, 1940), m: imgUrl(s.m, 980), ar: 2, arm: 2 })),
  tiles: portraits.sort((a, b) => b.area - a.area).slice(0, 2).map((p) => ({
    href: p.href, d: imgUrl(p.d, 960), m: imgUrl(p.d, 640), ar: Number(p.ratio.toFixed(4)), arm: Number(p.ratio.toFixed(4)),
  })),
  preload: null,
};
data.preload = data.banners[0] || null;

await fs.mkdir(path.join(ROOT, 'sf', 'data'), { recursive: true });
await fs.writeFile(path.join(ROOT, 'sf', 'data', 'home.json'), JSON.stringify(data), 'utf8');

console.log('轮播:', data.banners.length, '（来源 slider slides:', slides.length, '）');
data.banners.forEach((b, i) => console.log('  ', i, b.d.split('/').pop().slice(0, 52), '->', b.href));
console.log('双图位:', data.tiles.length);
data.tiles.forEach((t, i) => console.log('  ', i, 'ar=' + t.ar, t.d.split('/').pop().slice(0, 40)));

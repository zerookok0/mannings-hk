// scripts/sf/03-home.mjs —— 原站首页 CMS：轮播（宽幅横幅）/ 促销条 / 双图位
// 关键：按 CMS 里的 data-image-dimensions 保留每张图真实宽高比，绝不裁剪
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
  'eCoupons', 'store-finder',
]);

function href(raw) {
  let h = String(raw || '').replace(/&amp;/g, '&').replace(/^https?:\/\/www\.mannings\.com\.hk/, '');
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
  return API + rel + `?optimize=high&fit=bounds&width=${w}&format=webp&bv=20261124a`;
};

function dims(tag) {
  const raw = ((tag.match(/data-image-dimensions="([^"]*)"/) || [])[1] || '').replace(/&quot;/g, '"');
  try { const o = JSON.parse(raw); return { w: Number(o.width) || 0, h: Number(o.height) || 0 }; } catch { return { w: 0, h: 0 }; }
}

// 逐个 <img> 解析：尺寸取 data-image-dimensions，链接取最近的前置 <a href>
const rows = [];
const seen = new Set();
const imgRe = /<img[^>]*>/gi;
let m;
while ((m = imgRe.exec(html))) {
  const tag = m[0];
  const srcTag = (tag.match(/src="([^"]+)"/) || [])[1];
  if (!srcTag) continue;
  const isMobile = /pagebuilder-mobile-only/.test(tag);
  const isDesktop = /pagebuilder-mobile-hidden/.test(tag);
  if (!isMobile && !isDesktop) continue;
  const before = html.slice(0, m.index);
  const anchors = [...before.matchAll(/<a[^>]+href="([^"]+)"/gi)];
  const link = anchors.length ? anchors[anchors.length - 1][1] : '';
  const d = dims(tag);
  const key = (isDesktop ? 'D:' : 'M:') + srcTag.split('?')[0];
  if (seen.has(key)) continue;
  seen.add(key);
  rows.push({
    kind: isDesktop ? 'D' : 'M',
    href: href(link),
    src: srcTag,
    w: d.w, h: d.h,
    ratio: d.h ? d.w / d.h : 0,
    area: d.w * d.h,
  });
}

// 桌面/手机配对：先按文件名公共前缀，再按宽高比接近，最后才用自身
const base = (u) => String(u).split('/').pop().split('?')[0].replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
const common = (a, b) => { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; };
const pairs = [];
const usedM = new Set();
for (const r of rows.filter((x) => x.kind === 'D')) {
  const cands = rows.filter((x) => x.kind === 'M' && !usedM.has(x.src));
  let mate = null, best = 0;
  for (const c of cands) {
    const score = common(base(r.src).toLowerCase(), base(c.src).toLowerCase());
    if (score > best) { best = score; mate = c; }
  }
  if (!mate || best < 6) {
    // 退回：比例最接近
    let bd = Infinity;
    for (const c of cands) {
      if (!c.ratio || !r.ratio) continue;
      const d = Math.abs(c.ratio - r.ratio);
      if (d < bd) { bd = d; mate = c; }
    }
    if (mate && bd > 0.35) mate = null;
  }
  if (mate) usedM.add(mate.src);
  pairs.push({
    href: r.href, d: r.src, m: mate ? mate.src : r.src,
    dw: r.w, dh: r.h, mw: mate ? mate.w : r.w, mh: mate ? mate.h : r.h,
    ratio: r.ratio, mratio: mate && mate.h ? mate.w / mate.h : r.ratio, area: r.area,
  });
}
// 分类：宽幅横幅进轮播；过窄的竖图进双图位；极扁的（>10:1，多为栏目标题/LOGO）丢弃
const hero = pairs.filter((r) => r.ratio >= 4.5 && r.ratio <= 9);   // 只留真正横向促销条（排除装饰性透明图与超扁栏目头）
const tiles = pairs.filter((r) => r.ratio > 0 && r.ratio < 1.5).sort((a, b) => b.area - a.area).slice(0, 2);

const toBanner = (r, w) => ({
  href: r.href,
  d: imgUrl(r.d, w), m: imgUrl(r.m, Math.round(w * 0.7)),
  ar: r.ratio ? Number(r.ratio.toFixed(4)) : 0,          // 桌面宽高比
  arm: r.mratio ? Number(r.mratio.toFixed(4)) : 0,        // 手机宽高比
});
const toTile = (r, w) => ({
  href: r.href,
  d: imgUrl(r.d, w), m: imgUrl(r.m, w),
  ar: r.ratio ? Number(r.ratio.toFixed(4)) : 0,
  arm: r.mratio ? Number(r.mratio.toFixed(4)) : 0,
});

const data = {
  strip: [
    { text: '立即成為新會員即享 $45 折扣', href: '#/login' },
    { text: '電子優惠券專區', href: '#/search?q=' },
    { text: '重要安全提示', href: '#/info/important-security-alert' },
  ],
  banners: hero.slice(0, 8).map((r) => toBanner(r, 1940)),
  tiles: tiles.map((r) => toTile(r, 960)),
  preload: null,
};
data.preload = data.banners[0] || null;

await fs.mkdir(path.join(ROOT, 'sf', 'data'), { recursive: true });
await fs.writeFile(path.join(ROOT, 'sf', 'data', 'home.json'), JSON.stringify(data), 'utf8');

console.log('轮播:', data.banners.length, '| 双图位:', data.tiles.length);
data.banners.forEach((b, i) => console.log('  banner', i, 'ar=' + b.ar, b.d.split('/').pop().slice(0, 42), '->', b.href));
data.tiles.forEach((t, i) => console.log('  tile', i, 'ar=' + t.ar, t.d.split('/').pop().slice(0, 42)));

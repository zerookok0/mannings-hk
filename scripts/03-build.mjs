// scripts/03-build.mjs —— 生成静态镜像站（页面 / 商品 / 分类 / 品牌 / CMS 内容 / 数据）
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA, ROOT, readJson, writeJson } from './lib/api.mjs';

const RAW = path.join(DATA, 'raw');
const SITE = path.join(ROOT, 'site');
const ORIGIN = 'https://www.mannings.com.hk';
const SITE_URL = 'https://mannings.example.com';

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const details = await readJson(path.join(DATA, 'details.json'), {});
const lite = await readJson(path.join(DATA, 'catalog-lite.json'), null);
const mega = (await readJson(path.join(RAW, 'meta', 'megamenu.json'), null))?.data?.megamenu;
const storeCfg = (await readJson(path.join(RAW, 'meta', 'storeconfig.json'), null))?.data?.storeConfig;
if (!catalog) { console.error('缺少 data/catalog.json'); process.exit(1); }

const products = catalog.products;
const bySku = new Map(products.map((p) => [p.sku, p]));

// 本地图片路径（与 02-media-plan 的映射一致：派生 .webp）
function localImage(url) {
  if (!url) return null;
  const u = String(url).split('?')[0];
  if (!u.includes('/media/')) return null;
  const rel = u.slice(u.indexOf('/media/') + 1);
  if (!/\.(jpg|jpeg|png|webp)$/i.test(rel)) return null;
  return '/' + rel.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
}
for (const p of products) {
  p.imageLocal = localImage(p.image);
  const g = [];
  for (const it of details[p.sku]?.gallery || []) {
    const li = localImage(ORIGIN + '/media/catalog/product' + it.file);
    if (li && !g.includes(li)) g.push(li);
  }
  if (p.imageLocal && !g.includes(p.imageLocal)) g.unshift(p.imageLocal);
  p.galleryLocal = g;
}

// ---------- 分类（合并 uid 元数据 + 菜單路徑 + 商品映射） ----------
const catMeta = new Map();
for (const dir of ['cats', 'catpaths']) {
  let files = [];
  try { files = await fs.readdir(path.join(RAW, dir)); } catch { continue; }
  for (const f of files) {
    if (f.startsWith('_failed')) continue;
    const j = await readJson(path.join(RAW, dir, f), null);
    for (const c of j?.data?.categories?.items || []) if (c.url_path) catMeta.set(c.uid, c);
  }
}
const catSkus = new Map(); // uid -> Set(sku)
for (const p of products) {
  const d = details[p.sku];
  for (const c of d?.categories || []) {
    if (!catSkus.has(c.uid)) catSkus.set(c.uid, new Set());
    catSkus.get(c.uid).add(p.sku);
  }
}

// 菜單裡出現但沒有 uid 元數據的分類 -> 合成（名稱為菜單文字）
const menuPaths = new Map();
function walkMenu(nodes, trail = []) {
  for (const n of nodes || []) {
    const link = String(n.link || '');
    const m = link.match(/\/c\/([a-z0-9\-\/]+)/i);
    if (m) menuPaths.set(m[1], n.name);
    walkMenu(n.child_nodes, trail);
  }
}
walkMenu(mega?.nodes);

const cats = [];
for (const [uid, m] of catMeta) {
  if (!m.url_path) continue;
  cats.push({
    uid, name: m.name, urlPath: m.url_path, urlKey: m.url_key,
    level: Number(m.level) || 2, description: m.description || '', image: m.image || null,
    skus: [], synthetic: false,
  });
}
const havePaths = new Set(cats.map((c) => c.urlPath));
for (const [p, name] of menuPaths) {
  if (havePaths.has(p)) continue;
  if (cats.some((c) => c.urlPath === p)) continue;
  cats.push({
    uid: 'synth-' + p.replace(/[^a-z0-9]+/gi, '-'), name: name || p, urlPath: p, urlKey: p.split('/').pop(),
    level: p.split('/').length + 1, description: '', image: null, skus: [], synthetic: true,
  });
}

// 层级 + 商品聚合（自身 + 全部子分類）
cats.sort((a, b) => a.urlPath.localeCompare(b.urlPath));
const catByPath = new Map(cats.map((c) => [c.urlPath, c]));
const catByUid = new Map(cats.map((c) => [c.uid, c]));
function parentPath(urlPath) {
  const seg = urlPath.split('/');
  for (let i = seg.length - 1; i >= 1; i--) {
    const p = seg.slice(0, i).join('/');
    if (catByPath.has(p)) return p;
  }
  return null;
}
for (const c of cats) { c.parent = parentPath(c.urlPath); c.children = []; c.skus = c.synthetic ? [] : [...(catSkus.get(c.uid) || [])]; }
for (const c of cats) if (c.parent) catByPath.get(c.parent).children.push(c);
for (const c of cats.slice().sort((a, b) => b.urlPath.split('/').length - a.urlPath.split('/').length)) {
  const set = new Set(c.skus);
  for (const ch of c.children) for (const s of ch.skus) set.add(s);
  c.skus = [...set];
  c.count = c.skus.length;
}
const roots = cats.filter((c) => !c.parent).sort((a, b) => b.count - a.count);

// ---------- 品牌 ----------
const brandMap = new Map();
for (const p of products) {
  if (!p.brand) continue;
  const key = p.brand;
  if (!brandMap.has(key)) brandMap.set(key, { name: key, slug: slugify(key), skus: [] });
  brandMap.get(key).skus.push(p.sku);
}
const brands = [...brandMap.values()].sort((a, b) => b.skus.length - a.skus.length);
const brandBySlug = new Map(brands.map((b) => [b.slug, b]));

// ---------- 工具 ----------
function slugify(s) {
  return String(s).trim().toLowerCase().replace(/['"’]/g, '')
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'x';
}
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const money = (v) => (v == null ? '' : '$' + Number(v).toLocaleString('en-HK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
const moneyInt = (v) => (v == null ? '' : '$' + String(Math.round(v)));
const rel = (from, to) => {
  const r = path.relative(path.dirname(from), to).split(path.sep).join('/');
  return r.startsWith('.') ? r : './' + r;
};
const abs = (p) => (p.startsWith('http') ? p : p);

async function writePage(relPath, html) {
  const dest = path.join(SITE, relPath);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, html, 'utf8');
  return dest;
}

// ---------- CMS 内容重写 ----------
const cmsPages = new Map();
for (const f of await fs.readdir(path.join(RAW, 'cms'))) {
  if (!f.endsWith('.json')) continue;
  const j = await readJson(path.join(RAW, 'cms', f), null);
  const page = j?.data?.cmsPage;
  if (!page || !page.content || page.content.length < 400) continue;
  // 文件名 -> 干净 slug：f03-how-to-shop -> how-to-shop；f14-info_about-mannings -> about-mannings
  let id = f.replace(/\.json$/, '').replace(/^f\d+-/, '').replace(/^info_/, '').replace(/^services_/, 'services-');
  cmsPages.set(id, page);
}

const OFFERS = new Set(['promotions', 'brandzone', 'travelessentials', 'mannings_exclusive', '1111-easy-stamp',
  'gen-m-women-health', 'mannings-payme-offer', 'important-security-alert', 'health', 'pharmacy-services', 'wellness-profile']);
const KNOWNCMS = OFFERS;
const INFO = new Set(['privacy-policy', 'terms-of-use', 'website-terms-and-conditions', 'mngwhatsapptnc', 'pics',
  'legal-notice-and-disclaimer', 'how-to-shop', 'home-delivery', 'click-and-collect-service', 'corporatesolutions',
  'about-mannings', 'join-us', 'services-community-health', 'store-finder', 'faq', 'contact-us']);

// 本地路由表：只有真实存在的目标才改写成站内链接，其余保留原站绝对地址
const LOCAL_ROUTES = new Set(['/index.html', '/search.html', '/cart.html', '/checkout.html', '/login.html', '/brands.html',
  '/info/store-finder.html', '/info/faq.html', '/info/contact-us.html']);
for (const p of products) LOCAL_ROUTES.add(`/p/${p.sku}.html`);
for (const c of cats) LOCAL_ROUTES.add(`/c/${c.urlPath}.html`);
for (const b of brands) LOCAL_ROUTES.add(`/b/${b.slug}.html`);
for (const id of cmsPages.keys()) LOCAL_ROUTES.add(OFFERS.has(id) ? `/offers/${id}.html` : `/info/${id}.html`);

function mapHref(raw) {
  let href = String(raw || '').trim();
  if (!href || href.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(href)) return null;
  let pathOnly = href.replace(/^https?:\/\/www\.mannings\.com\.hk/i, '');
  pathOnly = pathOnly.replace(/^\/zh-hant(?=\/|$)/i, '');
  if (!pathOnly.startsWith('/')) pathOnly = '/' + pathOnly;
  const clean = pathOnly.split('#')[0].split('?')[0].replace(/\/+$/, '') || '/';
  let m;
  if ((m = clean.match(/^\/c\/([a-z0-9\-\/]+)$/i))) {
    const cand = `/c/${m[1]}.html`;
    return LOCAL_ROUTES.has(cand) ? cand : null;
  }
  if ((m = clean.match(/^\/[a-z0-9\-]+\/p\/(\d+)$/i))) {
    const cand = `/p/${m[1]}.html`;
    return LOCAL_ROUTES.has(cand) ? cand : null;
  }
  if ((m = clean.match(/^\/brands\/(.+)$/i))) {
    const cand = `/b/${slugify(decodeURIComponent(m[1]))}.html`;
    return LOCAL_ROUTES.has(cand) ? cand : null;
  }
  if ((m = clean.match(/^\/offers\/([a-z0-9\-]+)$/i))) {
    const cand = `/offers/${m[1]}.html`;
    return LOCAL_ROUTES.has(cand) ? cand : null;
  }
  if ((m = clean.match(/^\/([a-z0-9\-]+)$/i))) {
    const id = m[1];
    for (const cand of [`/info/${id}.html`, `/offers/${id}.html`, `/b/${id}.html`]) {
      if (LOCAL_ROUTES.has(cand)) return cand;
    }
    if (id === 'promotions' || id === 'partners' || id === 'eCoupons') return '/offers/promotions.html';
    if (id === 'shop' || id === 'brands-list') return '/brands.html';
    return null;
  }
  return null;
}

function rewriteHtml(html) {
  let out = String(html);
  // 图片 -> 本地派生 webp / 原样保留 gif-svg
  out = out.replace(/(?:https?:\/\/www\.mannings\.com\.hk)?\/media\/([^"'\s\\)]+?)\.(jpg|jpeg|png|webp)/gi, (m, p) => `/media/${p}.webp`);
  out = out.replace(/(?:https?:\/\/www\.mannings\.com\.hk)?\/media\/([^"'\s\\)]+?\.(?:gif|svg))/gi, (m, p) => `/media/${p}`);
  // 链接：命中本地路由则改写，否则指回原站
  out = out.replace(/href="([^"]+)"/g, (m, href) => {
    const local = mapHref(href);
    if (local) return `href="${local}"`;
    if (/^(#|mailto:|tel:|javascript:|data:)/i.test(href)) return m;
    const orig = href.replace(/^https?:\/\/www\.mannings\.com\.hk/i, '').replace(/^\/zh-hant(?=\/|$)/i, '');
    const abs = 'https://www.mannings.com.hk' + (orig.startsWith('/') ? orig : '/' + orig);
    return `href="${abs}" target="_blank" rel="noopener"`;
  });
  return out;
}

// ---------- 组件 ----------
const NAV = (mega?.nodes || []).map((n) => ({
  name: n.name,
  href: rewriteHtml(`href="${n.link}"`).replace(/^href="|"$/g, '') || '#',
  link: n.link,
  icon: n.icon,
}));

function headerHTML(active = '') {
  const navLinks = (mega?.nodes || []).slice(0, 12).map((n) => {
    const href = navHref(n.link);
    const on = active && active === n.name ? ' class="on"' : '';
    return `<a href="${esc(href)}"${on}>${esc(n.name)}</a>`;
  }).join('');
  return `
<header class="topbar">
  <div class="wrap">
    <a class="logo" href="/index.html" aria-label="萬寧"><img src="/media/site/mannings-logo.svg" alt="Mannings 萬寧"></a>
    <form class="search" action="/search.html" method="get" role="search">
      <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="#212121" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
      <input type="search" name="q" placeholder="搜尋商品、品牌或關鍵字" autocomplete="off">
      <button type="submit">搜尋</button>
    </form>
    <div class="actions">
      <a href="/info/store-finder.html">門市位置</a>
      <a href="/login.html">登入 / 註冊</a>
      <a href="/cart.html">購物車 <span class="badge" data-cart-count>0</span></a>
    </div>
  </div>
</header>
<nav class="navbar"><div class="wrap">${navLinks}</div></nav>`;
}

function navHref(link) {
  if (!link) return '#';
  let l = String(link);
  if (/^https?:/.test(l)) l = l.replace(/^https?:\/\/www\.mannings\.com\.hk/, '');
  l = l.replace(/^\/zh-hant/, '');
  let m;
  if ((m = l.match(/^\/c\/([a-z0-9\-\/]+)/i))) return `/c/${m[1]}.html`;
  if ((m = l.match(/^\/offers\/([a-z0-9\-]+)/i))) return `/offers/${m[1]}.html`;
  if ((m = l.match(/^\/brands\/(.+)$/i))) return `/b/${slugify(decodeURIComponent(m[1]))}.html`;
  if ((m = l.match(/^\/promotions/i))) return '/offers/promotions.html';
  if ((m = l.match(/^\/brandzone/i))) return '/offers/brandzone.html';
  if ((m = l.match(/^\/brands$/i))) return '/brands.html';
  if ((m = l.match(/^\/partners/))) return '/offers/promotions.html';
  if ((m = l.match(/^\/eCoupons/i))) return '/offers/promotions.html';
  if ((m = l.match(/^\/login/))) return '/login.html';
  if ((m = l.match(/^\/cart/))) return '/cart.html';
  if ((m = l.match(/^\/checkout/))) return '/checkout.html';
  if ((m = l.match(/^\/([a-z0-9\-]+)$/i))) {
    const id = m[1];
    if (KNOWNCMS.has(id)) return `/offers/${id}.html`;
    if (INFO.has(id)) return `/info/${id}.html`;
    if (cmsPages.has(id)) return `/info/${id}.html`;
    return `/info/${id}.html`;
  }
  return '#';
}

function footerHTML() {
  const col = (title, items) => `<div><h4>${esc(title)}</h4>${items.map(([t, h]) => `<a href="${h}">${esc(t)}</a>`).join('')}</div>`;
  return `
<footer>
  <div class="wrap">
    <div class="fgrid">
      <div class="fbrand">
        <img src="/media/site/mannings-logo.svg" alt="Mannings">
        <p style="font-size:12.5px;color:#6b7280;margin:0">萬寧官方網店 · 香港最大健康及美容零售網絡<br>本鏡像站由原始站點公開資料離線重建。</p>
        <div class="pay"><span>VISA</span><span>Mastercard</span><span>AlipayHK</span><span>PayMe</span><span>WeChat Pay</span><span>UnionPay</span></div>
      </div>
      ${col('關於萬寧', [['公司簡介', '/info/about-mannings.html'], ['分店位置', '/info/store-finder.html'], ['聯絡我們', '/info/contact-us.html'], ['加入我們', '/info/join-us.html'], ['最新優惠', '/offers/promotions.html']])}
      ${col('網購指南', [['購物教學', '/info/how-to-shop.html'], ['送貨上門', '/info/home-delivery.html'], ['網購店取及快取易', '/info/click-and-collect-service.html'], ['常見問題', '/info/faq.html'], ['企業服務查詢', '/info/corporatesolutions.html']])}
      ${col('條款與政策', [['網上服務條款及細則', '/info/terms-of-use.html'], ['條款及細則', '/info/website-terms-and-conditions.html'], ['私隱政策', '/info/privacy-policy.html'], ['個人資料之收集聲明', '/info/pics.html'], ['法律通告及免責聲明', '/info/legal-notice-and-disclaimer.html']])}
      ${col('熱門分類', roots.slice(0, 5).map((c) => [c.name, `/c/${c.urlPath}.html`]))}
    </div>
    <div class="copy">
      <span>© ${new Date().getFullYear()} 萬寧鏡像站 · 內容版權歸原始站點所有</span>
      <span>商品資料抓取時間：${esc(catalog.scrapedAt.slice(0, 19).replace('T', ' '))} · 共 ${products.length} 個 SKU</span>
    </div>
  </div>
</footer>`;
}

function layout({ title, desc = '', body, active = '', bodyClass = '', extraHead = '', scripts = '' }) {
  return `<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc || '萬寧官方網店鏡像站：健康、美容、個人護理、母嬰、家居用品網購。')}">
<link rel="icon" href="/media/site/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/app.css">
${extraHead}
</head>
<body class="${bodyClass}">
${headerHTML(active)}
<main class="wrap">
${body}
</main>
${footerHTML()}
<div class="toast" id="toast"></div>
<script src="/assets/app.js" defer></script>
${scripts}
</body>
</html>`;
}

function promoOf(p) {
  const d = details[p.sku];
  const o = (d?.offers || []).find((x) => x.message);
  return o ? o.message : '';
}

function brandHref(b) {
  const s = slugify(b || '');
  return brandBySlug.has(s) ? `/b/${s}.html` : '/brands.html';
}

function cardHTML(p, { from = 'index.html' } = {}) {
  const href = rel(from, `p/${p.sku}.html`);
  const img = p.imageLocal ? rel(from, p.imageLocal) : '/media/site/placeholder.svg';
  const off = p.price.discount && p.price.discount > 0 ? `<span class="off">-${Math.round(p.price.discount)}%</span>` : '';
  const was = p.price.regular && p.price.final && p.price.regular > p.price.final ? `<span class="was">${money(p.price.regular)}</span>` : '';
  const promo = promoOf(p);
  return `<article class="card" data-sku="${p.sku}">
  <a class="thumb" href="${href}">
    <img src="${img}" alt="${esc(p.name)}" loading="lazy">
    ${p.isExclusive ? '<span class="tagline">官網限定</span>' : p.isNew ? '<span class="tagline">新登場</span>' : ''}
    <span class="fav" title="加入收藏">♡</span>
  </a>
  <a class="brand" href="${brandHref(p.brand)}">${esc(p.brand || '')}</a>
  <a class="name" href="${href}">${esc(p.name)}</a>
  <div class="size">${esc(p.productSize || '')}</div>
  ${promo ? `<div class="promo">${esc(promo)}</div>` : ''}
  <div class="prices"><span class="now">${money(p.price.final)}</span>${was}${off}</div>
  ${p.inStock ? '<div class="stock">有貨 · 門市及網店同步</div>' : '<div class="stock" style="color:#9ca3af">暫時缺貨</div>'}
  <button class="add" data-add="${p.sku}">加入購物車</button>
</article>`;
}

function cardGrid(list, { from, cols = '' } = {}) {
  return `<div class="grid ${cols}">${list.map((p) => cardHTML(p, { from })).join('\n')}</div>`;
}

function crumbsHTML(trail, from) {
  const parts = trail.map((t, i) => {
    const last = i === trail.length - 1;
    const label = `<span>${esc(t.name)}</span>`;
    if (!t.href || last) return label;
    return `<a href="${rel(from, t.href)}">${esc(t.name)}</a><span class="sep">›</span>`;
  });
  return `<div class="crumbs">${parts.join('')}</div>`;
}

// ---------- 首页 ----------
function cmsImages(content) {
  const out = [];
  for (const m of content.matchAll(/<img[^>]+src="(?:https?:\/\/www\.mannings\.com\.hk)?(\/media\/[^"?]+\.(?:jpg|jpeg|png|webp|gif|svg))[^"]*"/gi)) {
    const p = m[1].replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
    if (!out.includes(p)) out.push(p);
  }
  return out;
}

async function buildHome() {
  const home = cmsPages.get('home');
  const imgs = home ? cmsImages(home.content) : [];
  const wide = imgs.filter((i) => /banner|1940|1920|kv|Banner|web_banner/i.test(i));
  const hero = (wide.length ? wide : imgs).slice(0, 3);
  const promos = (wide.length > 3 ? wide : imgs).slice(3, 7);

  const quick = (mega?.nodes || []).filter((n) => n.icon).slice(0, 8);
  const iconPath = (u) => String(u).replace(/^https?:\/\/www\.mannings\.com\.hk/, '').replace(/\.(jpg|jpeg|png)$/i, '.webp');

  const bestRaw = products.filter((p) => p.isBestSeller);
  const best = (bestRaw.length ? bestRaw : products.slice().sort((a, b) => (b.price.discount || 0) - (a.price.discount || 0))).slice(0, 12);
  const fresh = products.filter((p) => p.isNew).slice(0, 12);
  const exclusive = products.filter((p) => p.isExclusive).slice(0, 12);
  const rail = (title, list, more) => list.length ? `<section class="rail">
    <div class="rail-head"><h2>${esc(title)}</h2>${more ? `<a class="more" href="${more}">查看全部 ›</a>` : ''}</div>
    <div class="grid g6">${list.map((p) => cardHTML(p, { from: 'index.html' })).join('')}</div>
  </section>` : '';

  const heroHTML = hero.length ? `<section class="hero"><a href="/offers/promotions.html"><img src="${hero[0]}" alt="萬寧最新推廣"></a></section>` : '';
  const quickHTML = quick.length ? `<div class="quick">${quick.map((n) => `<a href="${esc(navHref(n.link))}"><img src="${iconPath(n.icon)}" alt=""><span>${esc(n.name)}</span></a>`).join('')}</div>` : '';
  const promoHTML = promos.length ? `<div class="promo-2">${promos.slice(0, 4).map((p) => `<a href="/offers/promotions.html"><img src="${p}" alt="推廣" loading="lazy"></a>`).join('')}</div>` : '';
  const notices = home ? home.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

  const body = `
${heroHTML}
${quickHTML}
${rail('人氣熱賣', best, '/search.html?sort=new')}
${promoHTML}
${rail('新登場', fresh, '/search.html?sort=new')}
${rail('官網限定', exclusive, '/offers/mannings_exclusive.html')}
${roots.slice(0, 4).map((c) => rail(c.name, c.skus.slice(0, 12).map((s) => bySku.get(s)).filter(Boolean), `/c/${c.urlPath}.html`)).join('')}
<section class="section" style="font-size:12px;color:#6b7280">
  <details><summary style="cursor:pointer;font-weight:700;color:#212121">推廣條款及細則（原文）</summary>
  <p style="line-height:1.9;margin-top:10px">${esc(notices.slice(0, 4000))}</p></details>
</section>`;
  await writePage('index.html', layout({
    title: '主頁 | 萬寧官方網店（鏡像）',
    body,
    active: '',
  }));
}

// ---------- 分类页 ----------
async function buildCategory(c) {
  const list = c.skus.map((s) => bySku.get(s)).filter(Boolean);
  const from = `c/${c.urlPath}.html`;
  const parent = c.parent ? catByPath.get(c.parent) : null;
  const trail = [];
  let cur = c;
  const chain = [];
  while (cur) { chain.unshift(cur); cur = cur.parent ? catByPath.get(cur.parent) : null; }
  trail.push({ name: '主頁', href: 'index.html' });
  for (const n of chain) trail.push({ name: n.name, href: `c/${n.urlPath}.html` });

  const brandCount = new Map();
  for (const p of list) brandCount.set(p.brand, (brandCount.get(p.brand) || 0) + 1);
  const topBrands = [...brandCount.entries()].filter(([b]) => b).sort((a, b) => b[1] - a[1]).slice(0, 14);

  const first = list.slice(0, 40);
  const chips = c.children.map((ch) => `<a class="chip" href="/c/${ch.urlPath}.html">${esc(ch.name)} <span style="opacity:.6">${ch.count}</span></a>`).join('');
  const brandChips = topBrands.map(([b, n]) => `<label><input type="checkbox" data-brand="${esc(b)}"> ${esc(b)} <span style="color:#9ca3af">(${n})</span></label>`).join('');

  const body = `
${crumbsHTML(trail, from)}
<div class="listing">
  <aside class="side">
    <h3>品牌</h3>
    <div class="facet" id="brandFacet">${brandChips || '<span style="font-size:12px;color:#9ca3af">—</span>'}</div>
    ${c.children.length ? `<h3 style="margin-top:18px">子分類</h3><div class="chips">${chips}</div>` : ''}
    <h3 style="margin-top:18px">價格</h3>
    <div class="chips">
      <button class="chip" data-price="0-50">$50 以下</button>
      <button class="chip" data-price="50-100">$50–100</button>
      <button class="chip" data-price="100-300">$100–300</button>
      <button class="chip" data-price="300-999999">$300 以上</button>
    </div>
  </aside>
  <section>
    <div class="list-head">
      <div><h1>${esc(c.name)}</h1><div class="count"><span id="showCount">${list.length}</span> 件商品${parent ? ` · 上級分類：<a href="/c/${parent.urlPath}.html" style="color:#ff8300">${esc(parent.name)}</a>` : ''}</div></div>
      <div class="toolbar">
        <select id="sortSel">
          <option value="pos">預設排序</option>
          <option value="price-asc">價格由低至高</option>
          <option value="price-desc">價格由高至低</option>
          <option value="name">名稱</option>
        </select>
      </div>
    </div>
    <div id="grid" class="grid" data-cat="${esc(c.uid)}" data-src="/data/cat/${esc(c.uid.replace(/[^A-Za-z0-9_\-=]/g, ''))}.json" data-from="${esc(from)}">${first.map((p) => cardHTML(p, { from })).join('')}</div>
    <div class="pager" id="pager"></div>
  </section>
</div>`;
  await writeJson(path.join(SITE, 'data', 'cat', `${c.uid.replace(/[^A-Za-z0-9_\-=]/g, '')}.json`),
    list.map((p) => ({ sku: p.sku, n: p.name, i: p.imageLocal, b: p.brand, s: p.productSize, f: p.price.final, r: p.price.regular, d: p.price.discount, st: p.inStock })));
  await writePage(`c/${c.urlPath}.html`, layout({ title: `${c.name} | 萬寧官方網店（鏡像）`, desc: `${c.name} 共 ${list.length} 件商品`, body, active: '' }));
}

// ---------- 商品页 ----------
async function buildProduct(p) {
  const d = details[p.sku] || {};
  const from = `p/${p.sku}.html`;
  const chain = (d.categories || []).slice().sort((a, b) => a.level - b.level);
  const trail = [{ name: '主頁', href: 'index.html' }];
  for (const c of chain) {
    const m = catByUid.get(c.uid);
    if (m) trail.push({ name: m.name, href: `c/${m.urlPath}.html` });
  }
  trail.push({ name: p.name });

  const gallery = (p.galleryLocal && p.galleryLocal.length ? p.galleryLocal : [p.imageLocal]).filter(Boolean);
  const thumbs = gallery.map((g, i) => `<img src="${rel(from, g)}" data-idx="${i}" class="${i === 0 ? 'on' : ''}" alt="">`).join('');
  const mainImg = gallery[0] ? `<img id="mainImg" src="${rel(from, gallery[0])}" alt="${esc(p.name)}">` : '';

  const offers = (d.offers || []).filter((o) => o.message || o.description);
  const off = p.price.discount > 0 ? `<span class="save">慳 ${Math.round(p.price.discount)}%</span>` : '';
  const was = p.price.regular > p.price.final ? `<span class="was">${money(p.price.regular)}</span>` : '';

  const attrs = (d.attributes || []).filter((a) => !['url_key', 'store_code', 'is_cwg', 'only_x_in_stock', 'atp_qty', 'tag_images'].includes(a.code));
  const specRows = attrs.map((a) => `<tr><th>${esc(a.label || a.code)}</th><td>${esc(a.value)}</td></tr>`).join('');

  const related = (d.related || []).map((r) => bySku.get(r.sku)).filter(Boolean).slice(0, 8);
  const sameCat = (d.categories?.[d.categories.length - 1]
    ? (catSkus.get(d.categories[d.categories.length - 1].uid) || new Set())
    : new Set());
  const alsoLike = [...sameCat].filter((s) => s !== p.sku).slice(0, 8).map((s) => bySku.get(s)).filter(Boolean);

  const panes = {
    desc: d.descriptionHtml || d.shortDescriptionHtml || '<p>暫無商品簡介。</p>',
    usage: [d.howToUseHtml, d.productUsage ? `<p>${esc(d.productUsage)}</p>` : '', d.disclaimers ? `<p style="color:#9ca3af;font-size:12.5px">${esc(d.disclaimers)}</p>` : ''].filter(Boolean).join('') || '<p>暫無使用方法資料。</p>',
    spec: `${d.ingredients ? `<h3 style="font-size:14px;margin:0 0 8px">成分</h3><p>${esc(d.ingredients)}</p>` : ''}${specRows ? `<table class="spec">${specRows}</table>` : '<p>暫無規格資料。</p>'}`,
    ship: d.deliveryReturnHtml || '<p>送貨及退貨政策請參考 <a href="/info/delivery-information.html">送貨資訊</a> 及 <a href="/info/return-refund.html">退貨及退款</a>。</p>',
  };

  const body = `
${crumbsHTML(trail, from)}
<div class="pdp">
  <div class="gallery">
    <div class="thumbs">${thumbs}</div>
    <div class="main">${mainImg}</div>
  </div>
  <div class="pinfo">
    <a class="brandline" href="${brandHref(p.brand)}">${esc(p.brand || '')}</a>
    <h1>${esc(p.name)}</h1>
    <div class="meta">
      <span>SKU：${esc(p.sku)}</span>
      ${p.productSize ? `<span>規格：${esc(p.productSize)}</span>` : ''}
      ${d.country || p.country ? `<span>產地：${esc(d.country || p.country)}</span>` : ''}
      <span>${p.inStock ? '<span style="color:#0f9d58">有貨</span>' : '暫時缺貨'}</span>
    </div>
    <div class="pricebox">
      <span class="now"><small>HK$</small>${Number(p.price.final).toFixed(2)}</span>
      ${was}${off}
      ${d.purchaseCount ? `<span style="font-size:12px;color:#9ca3af">${esc(d.purchaseCount)}</span>` : ''}
    </div>
    ${offers.length ? `<div class="offers">${offers.slice(0, 6).map((o) => `<div class="o"><b>優惠</b><span>${esc(o.message || o.description || o.name)}</span></div>`).join('')}</div>` : ''}
    <div class="buyrow">
      <div class="qty"><button data-q="-">−</button><input id="qty" value="1" inputmode="numeric"><button data-q="+">+</button></div>
      <button class="btn-primary" data-add="${p.sku}">加入購物車</button>
      <button class="btn-ghost" data-buy="${p.sku}">立即購買</button>
    </div>
    <div class="svc">
      <div><b>送貨上門</b><br>滿 $399 免運費，1–3 個工作天</div>
      <div><b>門市自取</b><br>全港 300+ 門市，最快 2 小時</div>
      <div><b>正貨保證</b><br>萬寧官方採購，7 天退換</div>
    </div>
  </div>
</div>
<div class="tabs">
  <div class="tabbar">
    <button class="on" data-tab="desc">商品簡介</button>
    <button data-tab="usage">使用方法</button>
    <button data-tab="spec">規格與成分</button>
    <button data-tab="ship">送貨及退貨</button>
  </div>
  <div class="pane" data-pane="desc">${rewriteHtml(panes.desc)}</div>
  <div class="pane hide" data-pane="usage">${rewriteHtml(panes.usage)}</div>
  <div class="pane hide" data-pane="spec">${rewriteHtml(panes.spec)}</div>
  <div class="pane hide" data-pane="ship">${rewriteHtml(panes.ship)}</div>
</div>
${related.length ? `<section class="rail"><div class="rail-head"><h2>相關商品</h2></div>${cardGrid(related, { from })}</section>` : ''}
${alsoLike.length ? `<section class="rail"><div class="rail-head"><h2>同類商品</h2></div>${cardGrid(alsoLike, { from })}</section>` : ''}
<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Product', name: p.name, sku: p.sku, brand: { '@type': 'Brand', name: p.brand || '' },
    image: gallery.map((g) => g), description: (d.shortDescriptionHtml || '').replace(/<[^>]+>/g, '').slice(0, 300),
    offers: { '@type': 'Offer', price: p.price.final, priceCurrency: 'HKD', availability: p.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock' },
  })}</script>`;
  await writePage(`p/${p.sku}.html`, layout({
    title: `${p.name} | 萬寧官方網店（鏡像）`,
    desc: (d.metaDescription || `${p.brand || ''} ${p.name} ${p.productSize || ''}`).slice(0, 150),
    body,
  }));
}

// ---------- 品牌页 ----------
async function buildBrand(b) {
  const list = b.skus.map((s) => bySku.get(s)).filter(Boolean);
  const from = `b/${b.slug}.html`;
  const body = `
${crumbsHTML([{ name: '主頁', href: 'index.html' }, { name: '品牌', href: 'brands.html' }, { name: b.name }], from)}
<div class="list-head"><div><h1>${esc(b.name)}</h1><div class="count">${list.length} 件商品</div></div></div>
${cardGrid(list.slice(0, 60), { from })}
${list.length > 60 ? `<div class="empty" style="margin-top:14px">其餘 ${list.length - 60} 件商品可按分類瀏覽</div>` : ''}`;
  await writePage(`b/${b.slug}.html`, layout({ title: `${b.name} | 品牌 | 萬寧鏡像`, body }));
}

// ---------- 品牌索引 ----------
async function buildBrandIndex() {
  const groups = new Map();
  for (const b of brands) {
    const k = /^[a-z]/i.test(b.name) ? b.name[0].toUpperCase() : '#';
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(b);
  }
  const body = `<div class="crumbs"><span>主頁</span><span class="sep">›</span><span>品牌</span></div>
<div class="section"><h1 style="font-size:20px;margin:0 0 14px">全部品牌（${brands.length}）</h1>
${[...groups.keys()].sort().map((k) => `<div style="margin-bottom:18px"><h3 style="font-size:14px;margin:0 0 8px;color:#ff8300">${esc(k)}</h3>
<div class="chips">${groups.get(k).map((b) => `<a class="chip" href="/b/${b.slug}.html">${esc(b.name)} <span style="opacity:.55">${b.skus.length}</span></a>`).join('')}</div></div>`).join('')}
</div>`;
  await writePage('brands.html', layout({ title: '全部品牌 | 萬寧鏡像', body, active: '品牌' }));
}

// ---------- CMS 内容页 ----------
const CMS_EXTRA_CSS = `<style>
  #html-body{font-size:14px;line-height:1.7}
  #html-body img{max-width:100%;height:auto}
  #html-body .pagebuilder-column-line,#html-body .pagebuilder-column-group{max-width:100%!important;flex-wrap:wrap}
  #html-body [data-content-type="banner"]{max-width:100%}
  #html-body table{max-width:100%}
</style>`;

async function buildCmsPages() {
  const built = [];
  for (const [id, page] of cmsPages) {
    if (id === 'home') continue;
    const dir = OFFERS.has(id) ? 'offers' : 'info';
    const body = `<div class="crumbs"><a href="/index.html">主頁</a><span class="sep">›</span><span>${esc(page.title || id)}</span></div>
<div id="html-body" class="cms-page" style="background:#fff;border-radius:10px;padding:10px;overflow:hidden">
${page.content_heading ? `<h1 style="font-size:22px;margin:10px 0 16px">${esc(page.content_heading)}</h1>` : ''}
${rewriteHtml(page.content)}
</div>`;
    await writePage(`${dir}/${id}.html`, layout({ title: `${page.title || id} | 萬寧鏡像`, desc: page.meta_description || '', body, extraHead: CMS_EXTRA_CSS }));
    built.push(`${dir}/${id}`);
  }
  return built;
}

// ---------- 門市位置（真實門店數據） ----------
async function buildStoreFinder() {
  const raw = await readJson(path.join(RAW, 'stores', 'stores.json'), null);
  const items = raw?.data?.runStoreInfo?.data?.items || [];
  const byDistrict = new Map();
  for (const s of items) {
    const d = s.districtName || s.district || '其他';
    if (!byDistrict.has(d)) byDistrict.set(d, []);
    byDistrict.get(d).push(s);
  }
  const body = `<div class="crumbs"><a href="/index.html">主頁</a><span class="sep">›</span><span>分店位置</span></div>
<div class="section">
  <h1 style="font-size:22px;margin:0 0 6px">分店位置</h1>
  <p style="font-size:13px;color:#6b7280;margin:0 0 16px">全港共 <b>${items.length}</b> 間分店／取貨點 · 資料抓取時間 ${esc(catalog.scrapedAt.slice(0, 10))}</p>
  <div class="chips" style="margin-bottom:18px">${[...byDistrict.keys()].sort().map((d) => `<a class="chip" href="#d-${encodeURIComponent(d)}">${esc(d)} <span style="opacity:.6">${byDistrict.get(d).length}</span></a>`).join('')}</div>
  ${[...byDistrict.entries()].sort((a, b) => a[0].localeCompare(b[0], 'zh-Hant')).map(([d, list]) => `
  <h3 id="d-${encodeURIComponent(d)}" style="font-size:15px;margin:22px 0 10px;color:#ff8300">${esc(d)}（${list.length}）</h3>
  <table class="spec">
    <tr><th>分店</th><th>地址</th><th>電話</th><th>服務</th></tr>
    ${list.sort((a, b) => String(a.name).localeCompare(String(b.name), 'zh-Hant')).map((s) => `<tr>
      <td><b>${esc(s.name || s.nameEn || '')}</b></td>
      <td>${esc(s.address || s.addressEn || '')}</td>
      <td>${esc(s.phone || '')}</td>
      <td>${esc((Array.isArray(s.attributes) ? s.attributes : []).map((a) => a.store_service).filter(Boolean).join('、'))}</td></tr>`).join('')}
  </table>`).join('')}
</div>`;
  await writePage('info/store-finder.html', layout({ title: '分店位置 | 萬寧鏡像', desc: `全港 ${items.length} 間萬寧分店地址及電話`, body }));
}

// ---------- 補齊缺失資訊頁（避免死鏈） ----------
async function buildFallbacks() {
  const pages = {
    'faq': ['常見問題', '萬寧網店的常見問題（FAQ）由原站前端動態組成，離線鏡像未包含該動態問答資料庫。你可參考以下頁面了解購物流程與售後政策。',
      [['購物教學', '/info/how-to-shop.html'], ['送貨上門', '/info/home-delivery.html'], ['網購店取及快取易', '/info/click-and-collect-service.html'], ['條款及細則', '/info/website-terms-and-conditions.html']]],
    'contact-us': ['聯絡我們', '客戶服務熱線：+852 2299 3388 · 服務時間：星期一至日 09:00–22:00。企業及大量採購請見「企業服務查詢」。',
      [['企業服務查詢', '/info/corporatesolutions.html'], ['分店位置', '/info/store-finder.html'], ['網上服務條款', '/info/terms-of-use.html']]],
  };
  for (const [id, [title, text, links]] of Object.entries(pages)) {
    if (cmsPages.has(id)) continue;
    const body = `<div class="crumbs"><a href="/index.html">主頁</a><span class="sep">›</span><span>${esc(title)}</span></div>
<div class="section" style="max-width:820px">
  <h1 style="font-size:22px;margin:0 0 12px">${esc(title)}</h1>
  <p style="line-height:1.9;color:#374151">${esc(text)}</p>
  <div class="chips" style="margin-top:16px">${links.map(([t, h]) => `<a class="chip" href="${h}">${esc(t)}</a>`).join('')}</div>
</div>`;
    await writePage(`info/${id}.html`, layout({ title: `${title} | 萬寧鏡像`, body }));
  }
}

// ---------- 静态工具页 ----------
async function buildUtility() {
  const search = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>搜尋 | 萬寧鏡像</title><link rel="stylesheet" href="/assets/app.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;800&display=swap" rel="stylesheet"></head>
<body>${headerHTML()}<main class="wrap">
<div class="crumbs"><a href="/index.html">主頁</a><span class="sep">›</span><span>搜尋</span></div>
<div class="list-head"><div><h1 id="stitle">搜尋商品</h1><div class="count" id="scount">輸入關鍵字開始搜尋，共 ${products.length} 件商品可搜</div></div>
  <div class="toolbar"><input id="sq" placeholder="商品 / 品牌 / SKU" style="height:34px;border:1px solid #ececec;border-radius:9999px;padding:0 14px;width:240px"></div>
</div>
<div id="grid" class="grid"></div>
<div class="pager" id="pager"></div>
</main>${footerHTML()}<div class="toast" id="toast"></div>
<script src="/assets/app.js" defer></script><script src="/assets/search.js" defer></script></body></html>`;

  const cart = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>購物車 | 萬寧鏡像</title><link rel="stylesheet" href="/assets/app.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;800&display=swap" rel="stylesheet"></head>
<body>${headerHTML()}<main class="wrap">
<div class="crumbs"><a href="/index.html">主頁</a><span class="sep">›</span><span>購物車</span></div>
<div class="cartwrap">
  <div><div class="cartlist" id="cartList"></div></div>
  <aside class="csum">
    <h3 style="margin:0 0 10px;font-size:15px">訂單摘要</h3>
    <div class="row"><span>商品小計</span><span id="subtotal">$0.00</span></div>
    <div class="row"><span>運費</span><span id="ship">$0.00</span></div>
    <div class="row"><span>折扣</span><span id="disc">-$0.00</span></div>
    <div class="total"><span>總計</span><span id="total">$0.00</span></div>
    <button class="btn-primary" style="width:100%;margin-top:14px" onclick="location.href='/checkout.html'">前往結帳</button>
    <div class="note">滿 $399 免運費 · 支援門市自取</div>
  </aside>
</div>
</main>${footerHTML()}<div class="toast" id="toast"></div>
<script src="/assets/app.js" defer></script></body></html>`;

  const checkout = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>結帳 | 萬寧鏡像</title><link rel="stylesheet" href="/assets/app.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;800&display=swap" rel="stylesheet"></head>
<body>${headerHTML()}<main class="wrap">
<div class="crumbs"><a href="/index.html">主頁</a><span class="sep">›</span><a href="/cart.html">購物車</a><span class="sep">›</span><span>結帳</span></div>
<div class="cartwrap">
  <div>
    <form class="form" id="checkoutForm">
      <h2>收貨資料</h2>
      <div class="grid2">
        <div class="field"><label>收件人姓名</label><input name="name" required placeholder="陳大文"></div>
        <div class="field"><label>聯絡電話</label><input name="phone" required placeholder="9123 4567"></div>
      </div>
      <div class="field"><label>電郵</label><input name="email" type="email" placeholder="you@example.com"></div>
      <div class="grid2">
        <div class="field"><label>送貨方式</label><select name="delivery"><option>送貨上門</option><option>門市自取</option><option>順豐智能櫃</option></select></div>
        <div class="field"><label>地區</label><select name="district"><option>香港島</option><option>九龍</option><option>新界</option></select></div>
      </div>
      <div class="field"><label>詳細地址</label><input name="address" placeholder="街道、門牌、樓層"></div>
      <div class="field"><label>備註</label><textarea name="note" placeholder="例如：請於下午送達"></textarea></div>
      <div class="field"><label>付款方式（鏡像演示，不會產生真實交易）</label><select name="pay"><option>貨到付款</option><option>信用卡</option><option>PayMe</option><option>AlipayHK</option></select></div>
      <button class="btn-primary" type="submit" style="width:100%">提交訂單</button>
      <div id="orderResult" class="note" style="display:none"></div>
    </form>
  </div>
  <aside class="csum">
    <h3 style="margin:0 0 10px;font-size:15px">訂單摘要</h3>
    <div id="coItems" style="font-size:12.5px;color:#4b5563"></div>
    <div class="total"><span>總計</span><span id="coTotal">$0.00</span></div>
    <div class="note">此為離線鏡像站，提交只會在本機記錄訂單號。</div>
  </aside>
</div>
</main>${footerHTML()}<div class="toast" id="toast"></div>
<script src="/assets/app.js" defer></script></body></html>`;

  const login = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>登入 | 萬寧鏡像</title><link rel="stylesheet" href="/assets/app.css">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;800&display=swap" rel="stylesheet"></head>
<body>${headerHTML()}<main class="wrap" style="max-width:460px">
<div class="form" style="margin-top:30px">
  <h2>登入 / 註冊</h2>
  <div class="field"><label>電郵或手機號碼</label><input placeholder="you@example.com"></div>
  <div class="field"><label>密碼</label><input type="password" placeholder="••••••••"></div>
  <button class="btn-primary" style="width:100%">登入</button>
  <div class="note">鏡像站不提供帳戶服務，資料不會送出。</div>
</div></main>${footerHTML()}<div class="toast" id="toast"></div><script src="/assets/app.js" defer></script></body></html>`;

  await writePage('search.html', search);
  await writePage('cart.html', cart);
  await writePage('checkout.html', checkout);
  await writePage('login.html', login);

  // 佔位圖
  await fs.mkdir(path.join(SITE, 'media', 'site'), { recursive: true });
  await fs.writeFile(path.join(SITE, 'media', 'site', 'placeholder.svg'),
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#f5f5f5"/><text x="100" y="105" font-size="13" fill="#bbb" text-anchor="middle">no image</text></svg>');
}

// ---------- 数据 ----------
async function buildData() {
  await writeJson(path.join(SITE, 'data', 'catalog.json'), {
    scrapedAt: catalog.scrapedAt,
    total: products.length,
    products: lite.products,
  });
  await writeJson(path.join(SITE, 'data', 'categories.json'), cats.map((c) => ({
    name: c.name, urlPath: c.urlPath, level: c.level, count: c.count, parent: c.parent,
  })));
  await writeJson(path.join(SITE, 'data', 'brands.json'), brands.map((b) => ({ name: b.name, slug: b.slug, count: b.skus.length })));
}

// ---------- 执行 ----------
const t0 = Date.now();
// 清理上一轮产物（保留 assets / media / data，图片下载耗时长不能删）
for (const d of ['b', 'c', 'p', 'offers', 'info']) {
  await fs.rm(path.join(SITE, d), { recursive: true, force: true });
}
for (const f of await fs.readdir(SITE)) {
  if (f.endsWith('.html')) await fs.rm(path.join(SITE, f), { force: true });
}
console.log('分类', cats.length, '· 品牌', brands.length, '· 商品', products.length);
await buildHome();
console.log('首页 ✓');
const cmsBuilt = await buildCmsPages();
console.log('CMS 页面', cmsBuilt.length, '✓');
await buildStoreFinder();
await buildFallbacks();
console.log('門市 / 補齊頁 ✓');
await buildBrandIndex();
console.log('品牌索引 ✓');
await buildData();
console.log('数据 ✓');

let n = 0;
for (const c of cats) { await buildCategory(c); if (++n % 50 === 0) console.log('  分类', n, '/', cats.length); }
console.log('分类页', cats.length, '✓');

n = 0;
for (const b of brands) { await buildBrand(b); if (++n % 200 === 0) console.log('  品牌', n, '/', brands.length); }
console.log('品牌页', brands.length, '✓');

n = 0;
for (const p of products) { await buildProduct(p); if (++n % 500 === 0) console.log('  商品', n, '/', products.length); }
console.log('商品页', products.length, '✓');

await buildUtility();
console.log('工具页 ✓');
console.log('耗时', ((Date.now() - t0) / 1000).toFixed(1), 's');

// scripts/04-export.mjs —— 导出 CSV / JSON 数据包（SKU 全量、分类、品牌、统计）
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA, ROOT, readJson, writeJson } from './lib/api.mjs';

const RAW = path.join(DATA, 'raw');
const OUT = path.join(DATA, 'exports');
await fs.mkdir(OUT, { recursive: true });

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const details = await readJson(path.join(DATA, 'details.json'), {});
if (!catalog) { console.error('先跑 01-normalize'); process.exit(1); }

const ORIGIN = 'https://www.mannings.com.hk';
function localImage(url) {
  if (!url) return null;
  const u = String(url).split('?')[0];
  if (!u.includes('/media/')) return null;
  const rel = u.slice(u.indexOf('/media/') + 1);
  if (!/\.(jpg|jpeg|png|webp)$/i.test(rel)) return null;
  return '/' + rel.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');
}

// 分类（uid 元数据 + 命中数）
const catMeta = new Map();
for (const f of await fs.readdir(path.join(RAW, 'cats'))) {
  if (!f.startsWith('cat-')) continue;
  const j = await readJson(path.join(RAW, 'cats', f), null);
  for (const c of j?.data?.categories?.items || []) catMeta.set(c.uid, c);
}
const catCount = new Map();
for (const p of catalog.products) for (const c of details[p.sku]?.categories || []) catCount.set(c.uid, (catCount.get(c.uid) || 0) + 1);

const csvCell = (v) => {
  const s = v == null ? '' : String(v);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
};
const toCsv = (rows, cols) => [cols.join(','), ...rows.map((r) => cols.map((c) => csvCell(r[c])).join(','))].join('\n');

const rows = catalog.products.map((p) => {
  const d = details[p.sku] || {};
  const imgs = [];
  const prim = localImage(p.image);
  if (prim) imgs.push(prim);
  for (const g of d.gallery || []) { const li = localImage(ORIGIN + '/media/catalog/product' + g.file); if (li && !imgs.includes(li)) imgs.push(li); }
  return {
    sku: p.sku,
    name: p.name,
    brand: p.brand || '',
    product_size: p.productSize || '',
    regular_price: p.price.regular,
    final_price: p.price.final,
    discount_percent: p.price.discount || '',
    currency: p.price.currency,
    in_stock: p.inStock ? 1 : 0,
    atp_qty: p.atpQty ?? '',
    max_order_qty: p.maxOrderQty ?? '',
    url_key: p.urlKey,
    original_url: p.url,
    local_page: `/p/${p.sku}.html`,
    image: prim || '',
    gallery_count: imgs.length,
    categories: (d.categories || []).map((c) => c.name).join(' | '),
    tags: p.tags || '',
    country: p.country || '',
    rewards: (d.offers || []).map((o) => o.message).filter(Boolean).join(' | '),
  };
});
await fs.writeFile(path.join(OUT, 'skus.csv'), '\uFEFF' + toCsv(rows, Object.keys(rows[0])), 'utf8');

const catRows = [...catMeta.values()].filter((c) => c.url_path).map((c) => ({
  uid: c.uid, name: c.name, url_path: c.url_path, url_key: c.url_key, level: c.level,
  products: catCount.get(c.uid) || 0, local_page: `/c/${c.url_path}.html`,
})).sort((a, b) => a.url_path.localeCompare(b.url_path));
await fs.writeFile(path.join(OUT, 'categories.csv'), '\uFEFF' + toCsv(catRows, Object.keys(catRows[0])), 'utf8');

const brandAgg = new Map();
for (const p of catalog.products) {
  if (!p.brand) continue;
  const slug = String(p.brand).trim().toLowerCase().replace(/['"’]/g, '').replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'x';
  const cur = brandAgg.get(p.brand) || { name: p.brand, slug, count: 0 };
  cur.count++;
  brandAgg.set(p.brand, cur);
}
const brandRows = [...brandAgg.values()].sort((a, b) => b.count - a.count).map((b) => ({ ...b, local_page: `/b/${b.slug}.html` }));
await fs.writeFile(path.join(OUT, 'brands.csv'), '\uFEFF' + toCsv(brandRows, Object.keys(brandRows[0])), 'utf8');

// 商品 JSON（文案保留，富文本转纯文本，控制体积）
const strip = (h) => String(h || '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\n{3,}/g, '\n\n').trim();
const brief = catalog.products.map((p) => {
  const d = details[p.sku] || {};
  return {
    sku: p.sku, name: p.name, brand: p.brand, product_size: p.productSize,
    regular_price: p.price.regular, final_price: p.price.final, discount: p.price.discount,
    in_stock: p.inStock, url_key: p.urlKey, local_page: `/p/${p.sku}.html`,
    image: localImage(p.image),
    description: strip(d.descriptionHtml).slice(0, 1200),
    usage: d.productUsage || strip(d.howToUseHtml).slice(0, 400),
    ingredients: d.ingredients || '',
    country: d.country || p.country || '',
    categories: (d.categories || []).map((c) => c.name),
  };
});
await writeJson(path.join(OUT, 'products.json'), brief);

const stats = {
  scrapedAt: catalog.scrapedAt,
  source: 'https://www.mannings.com.hk (zh_HK store view)',
  totalCount: catalog.totalCount,
  products: catalog.products.length,
  categories: catRows.length,
  brands: brandRows.length,
  pages: {
    home: 1,
    category: catRows.length,
    product: catalog.products.length,
    brand: brandRows.length,
  },
  priceRange: {
    min: Math.min(...catalog.products.map((p) => p.price.final || 0)),
    max: Math.max(...catalog.products.map((p) => p.price.final || 0)),
  },
  images: rows.reduce((a, r) => a + r.gallery_count, 0),
};
await writeJson(path.join(OUT, 'stats.json'), stats);
console.log(JSON.stringify(stats, null, 1));

// scripts/sf/01-data.mjs —— 生成店铺前端数据包（5折价 / 评分评价 / 图集 / 库存进度）
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT, DATA, readJson, writeJson } from '../lib/api.mjs';

const OUT = path.join(ROOT, 'sf', 'data');
const API = 'https://mannings-api.mating.workers.dev';
await fs.mkdir(path.join(OUT, 'detail'), { recursive: true });

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const details = await readJson(path.join(DATA, 'details.json'), {});
if (!catalog) { console.error('缺少 data/catalog.json'); process.exit(1); }

// 稳定的伪随机（同 SKU 永远同一结果）
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}

const imgUrl = (u, w = 500) => {
  if (!u) return '';
  const s = String(u).split('?')[0];
  const i = s.indexOf('/media/');
  const rel = i >= 0 ? s.slice(i) : s;
  return API + rel + `?optimize=high&fit=bounds&height=${w}&width=${w}&format=webp`;
};

const NAMES = ['陳大文', 'Wing L.', '阿儀', 'Karen C.', '李先生', 'Mandy', '陳太', 'Joey', '黃小姐', 'Kelvin'];
const POS = [
  '回購多次，質素穩定，價錢比門市平。', '包裝完整，到期日好長，抵買。', '用了一星期已經見到效果，會再買。',
  '送貨快，第二日就到，包裝無破損。', '同款用開，官網特價最抵。', '香港行貨，有信心。', '味道不錯，小朋友都食。',
  '用落唔錯，皮膚冇敏感。', '份量夠，抵用。', '買二送一時期入貨，好划算。',
];
const NEG = ['包裝送到有輕微壓扁，但產品無事。', '希望多啲折扣。', '味道比較濃，需要習慣。'];
const MIX = ['整體唔錯，會考慮回購。', '性價比高，不過存貨有時唔穩定。', '比預期好，推薦。'];

const catOf = (p) => (details[p.sku]?.categories || []).map((c) => c.name);

const list = [];
const shards = new Map(); // 0-9
for (const p of catalog.products) {
  const d = details[p.sku] || {};
  const rnd = seeded(p.sku);
  const rating = Math.round((3.6 + rnd() * 1.4) * 10) / 10;          // 3.6 ~ 5.0
  const reviewCount = Math.max(3, Math.round(8 + rnd() * 240));
  const sold = Math.max(20, Math.round(30 + rnd() * 1800));
  const stock = Math.max(3, Math.round(5 + rnd() * 120));
  const orig = Number(p.price.regular || p.price.final || 0);
  const sale = Math.max(1, Math.round(orig / 2));                      // 5 折
  const imgs = [];
  const push = (u) => { const x = imgUrl(u, 800); if (x && !imgs.includes(x)) imgs.push(x); };
  push(p.image);
  for (const g of d.gallery || []) push('https://www.mannings.com.hk/media/catalog/product' + g.file);

  // 评价（稳定的 4~6 条）
  const reviews = [];
  const n = 4 + Math.floor(rnd() * 3);
  for (let i = 0; i < n; i++) {
    const r = rnd();
    const stars = r > 0.25 ? (r > 0.5 ? 5 : 4) : (r > 0.12 ? 3 : 2);
    const text = stars >= 4 ? POS[Math.floor(rnd() * POS.length)] : (stars === 3 ? MIX[Math.floor(rnd() * MIX.length)] : NEG[Math.floor(rnd() * NEG.length)]);
    reviews.push({ name: NAMES[Math.floor(rnd() * NAMES.length)], stars, text, date: `2026-${String(1 + Math.floor(rnd() * 11)).padStart(2, '0')}-${String(1 + Math.floor(rnd() * 28)).padStart(2, '0')}` });
  }

  const item = {
    sku: p.sku, n: p.name, b: p.brand || '', s: p.productSize || '', c: catOf(p),
    o: orig, f: sale, d: 50,
    r: rating, rc: reviewCount, sold, stock,
    i: imgs[0] || '',
  };
  list.push(item);

  const shardKey = String(Number(String(p.sku).slice(-1)) % 10);
  if (!shards.has(shardKey)) shards.set(shardKey, {});
  shards.get(shardKey)[p.sku] = {
    sku: p.sku, name: p.name, brand: p.brand || '', size: p.productSize || '', country: d.country || '',
    images: imgs.slice(0, 8),
    desc: (d.descriptionHtml || d.shortDescriptionHtml || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 900),
    usage: d.productUsage || '', ingredients: d.ingredients || '',
    attrs: (d.attributes || []).filter((a) => !['url_key', 'store_code', 'is_cwg'].includes(a.code)).slice(0, 12).map((a) => [a.label || a.code, a.value]),
    offers: (d.offers || []).map((o) => o.message).filter(Boolean).slice(0, 3),
    reviews,
  };
}

await writeJson(path.join(OUT, 'catalog.json'), list);
for (const [k, v] of shards) await writeJson(path.join(OUT, 'detail', k + '.json'), v);

const cats = new Map();
for (const p of list) for (const c of p.c) cats.set(c, (cats.get(c) || 0) + 1);
await writeJson(path.join(OUT, 'cats.json'), [...cats.entries()].sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count })));
const brands = new Map();
for (const p of list) if (p.b) brands.set(p.b, (brands.get(p.b) || 0) + 1);
await writeJson(path.join(OUT, 'brands.json'), [...brands.entries()].sort((a, b) => b[1] - a[1]).slice(0, 300).map(([name, count]) => ({ name, count })));

let bytes = 0;
for (const f of await fs.readdir(OUT, { recursive: true })) { try { bytes += (await fs.stat(path.join(OUT, f))).size; } catch { } }
console.log('商品:', list.length, '| 分类:', cats.size, '| 品牌:', brands.size, '| 数据:', (bytes / 1048576).toFixed(1), 'MB');
console.log('样例:', JSON.stringify(list[0]).slice(0, 200));

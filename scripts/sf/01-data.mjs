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

// —— 香港用户口吻的评价语料（廣東話 + 港式書面語，按品类分组）——
const NAMES = [
  '阿儀', 'Wing L.', '陳太', 'Kelvin C.', 'Mandy', '阿明', '嘉欣', 'C9 大埔', 'yuki', '黃小姐',
  'Joe 仔', '沙田友', 'Karen', '細蚊', '阿珊', 'Sam', 'Mei Mei', '九龍城街坊', 'Anson', '肥仔賢',
  '屯門友', 'Cathy', '阿Roy', 'Jenny', '觀塘人', 'Kaman', '阿伯', 'Vivian', '深水埗師奶', 'Tony',
];

const POS_COMMON = [
  '回購第 N 次，質素穩定，官網買仲平過門市。',
  '落單第二日就送到，包裝企理，冇穿冇爛。',
  '5 折真係抵，趁特價入咗兩件。',
  '到期日好新，唔會係即期貨，放心。',
  '同屋企人一齊用，份量夠，抵用。',
  '送貨快靚正，星期日落單星期一朝早就到。',
  '用開呢隻，官網做特價就即刻掃。',
  '職員有問必答，落單流程好順。',
  '包裝好細心，有防撞氣袋，一滴都冇漏。',
  '買滿免運費，慳返車費同時間。',
];
const POS_BY_CAT = {
  健康: ['食咗兩個禮拜，精神好咗，會繼續食。', '老人家食開，話腸胃舒服咗。', '唔會太甜，容易入口。', '朝早空肚食一粒，方便。'],
  美容: ['質地清爽唔黏，夏天用都 OK。', '用咗一星期，皮膚冇再泛紅。', '敏感肌都用得，冇刺刺痛。', '上妝前用唔會起屑，正。'],
  個人護理: ['味道唔嗆，用完唔會乾。', '一家大細都用得，抵買。', '泡沫夠，好快沖乾淨。'],
  母嬰護理: ['BB 飲完成晚都冇事，消化好。', '尿片吸力夠，夜晚都唔怕漏。', '質地溫和，BB 皮膚冇敏感。'],
  家居用品: ['紙質厚實，唔會一濕就爛。', '一卷用到好耐，計落好抵。', '無香味，屋企人唔敏感。'],
  頭髮護理: ['洗完唔會旱，頭髮順咗。', '用咗一個月，甩少咗頭髮。', '泡夠多，一支用到兩個月。'],
  食品: ['味道濃，用嚟煲湯一流。', '獨立包裝，帶返工好方便。', '唔會太鹹，細路都食。'],
};
const NEU = [
  '整體 OK，不過如果多啲折扣就更好。',
  '同門市價差唔多，貪方便先上網買。',
  '效果普通，未算好驚喜，但都收貨。',
  '包裝送到有少少壓扁，入面冇事。',
  '味道有啲濃，要時間習慣。',
  '存貨有時唔穩定，試過等一個禮拜先出貨。',
];
const NEG = [
  '等咗五日先送到，比預期慢。',
  '收到時外盒凹咗，雖然入面冇事但觀感一般。',
  '同我之前用開嘅版本唔太一樣，要再觀察。',
];
const TAGS = ['已購買', '回購', '用家實測', ''];

const catOf = (p) => (details[p.sku]?.categories || []).map((c) => c.name);
function catGroup(cats) {
  const s = (cats || []).join(' ');
  if (/健康|保健|藥|維他命|靈芝|益生菌/.test(s)) return '健康';
  if (/美容|護膚|面霜|面膜|彩妝|防曬/.test(s)) return '美容';
  if (/母嬰|BB|嬰兒|奶粉|尿片/.test(s)) return '母嬰護理';
  if (/家居|紙巾|清潔|洗衣/.test(s)) return '家居用品';
  if (/頭髮|洗頭|護髮/.test(s)) return '頭髮護理';
  if (/食品|零食|飲品|湯/.test(s)) return '食品';
  return '個人護理';
}
function pick(arr, rnd) { return arr[Math.floor(rnd() * arr.length)]; }

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

  // 评价（港式口吻，5~7 条，按品类与星级分布）
  const cats = catOf(p);
  const grp = catGroup(cats);
  const pool = POS_BY_CAT[grp] || POS_BY_CAT['個人護理'];
  const reviews = [];
  const used = new Set();
  const take = (arr) => {
    for (let k = 0; k < 10; k++) { const t = pick(arr, rnd); if (!used.has(t)) { used.add(t); return t; } }
    return pick(arr, rnd);
  };
  const n = 5 + Math.floor(rnd() * 3);
  for (let i = 0; i < n; i++) {
    const r = rnd();
    const stars = r > 0.30 ? (r > 0.58 ? 5 : 4) : (r > 0.14 ? 3 : 2);
    let text;
    if (stars === 5) text = rnd() > 0.45 ? take(pool) : take(POS_COMMON);
    else if (stars === 4) text = rnd() > 0.5 ? take(POS_COMMON) : take(pool);
    else if (stars === 3) text = take(NEU);
    else text = take(NEG);
    const tag = stars >= 4 && rnd() > 0.6 ? pick(TAGS.filter(Boolean), rnd) : '';
    reviews.push({
      name: (() => { for (let k = 0; k < 10; k++) { const nm = pick(NAMES, rnd); if (!used.has('n:' + nm)) { used.add('n:' + nm); return nm; } } return pick(NAMES, rnd); })(),
      stars,
      text,
      tag,
      date: `2026-${String(1 + Math.floor(rnd() * 11)).padStart(2, '0')}-${String(1 + Math.floor(rnd() * 28)).padStart(2, '0')}`,
    });
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

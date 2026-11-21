// scripts/01-normalize.mjs —— 把 data/raw 合并成站点用的规范数据
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA, ROOT, readJson, writeJson } from './lib/api.mjs';

const RAW = path.join(DATA, 'raw');
const OUT = path.join(DATA, 'catalog');

await fs.mkdir(OUT, { recursive: true });

// ---------- 1. 搜索页 ----------
const searchFiles = (await fs.readdir(path.join(RAW, 'search'))).filter((f) => f.startsWith('page-')).sort();
const seen = new Set();
const products = [];
let total = 0;
let facetsFirst = null;
const categoryFacetCounts = new Map(); // urlPath -> {id,name,urlPath,count,parentPath}
const brandFacet = new Map();

for (const f of searchFiles) {
  const j = await readJson(path.join(RAW, 'search', f), null);
  const ps = j?.data?.productSearch;
  if (!ps) continue;
  total = ps.total_count;
  if (!facetsFirst && ps.facets) facetsFirst = ps.facets;
  for (const it of ps.items) {
    const pv = it.productView;
    const pr = it.product;
    if (!pv || seen.has(pv.sku)) continue;
    seen.add(pv.sku);
    const attrs = {};
    for (const a of pv.attributes || []) attrs[a.name] = a.value;
    const img = (pv.images || []).find((i) => (i.roles || []).includes('image')) || (pv.images || [])[0];
    const price = pr?.price_range?.minimum_price || null;
    products.push({
      sku: pv.sku,
      uid: pr?.uid || null,
      id: pr?.id || null,
      name: pv.name,
      urlKey: pv.urlKey,
      url: pv.url,
      type: pv.__typename,
      inStock: pv.inStock,
      image: img?.url || null,
      images: (pv.images || []).map((i) => i.url),
      brand: attrs.brand || null,
      productSize: attrs.product_size || null,
      country: attrs.country_origin_name || null,
      tags: attrs.tag_codes || null,
      tagImage: attrs.tag_images || null,
      isForOnline: attrs.is_for_online || null,
      isRedemption: attrs.is_redemption_product || null,
      isFreeGift: attrs.is_free_gift || null,
      isNew: attrs.is_manual_new_arrival === '1',
      isBestSeller: attrs.is_manual_best_seller === '1',
      isExclusive: attrs.is_manual_exclusive === '1' || attrs.tag_codes === '_Exclusive',
      maxOrderQty: attrs.max_order_qty ? Number(attrs.max_order_qty) : null,
      atpQty: attrs.atp_qty != null ? Number(attrs.atp_qty) : null,
      onlyXLeft: attrs.only_x_in_stock != null ? Number(attrs.only_x_in_stock) : null,
      attributes: attrs,
      price: price
        ? {
            final: price.final_price?.value ?? null,
            regular: price.regular_price?.value ?? null,
            currency: price.final_price?.currency || 'HKD',
            discount: price.discount?.percent_off ?? null,
            amountOff: price.discount?.amount_off ?? null,
          }
        : { final: null, regular: null, currency: 'HKD', discount: null, amountOff: null },
    });
  }
  for (const facet of ps.facets || []) {
    if (facet.attribute === 'categories' || facet.attribute === 'categoryPath') {
      for (const b of facet.buckets || []) {
        const urlPath = b.urlPath || b.path || '';
        if (!urlPath) continue;
        categoryFacetCounts.set(urlPath, { id: b.id, name: b.name || b.title, urlPath, urlKey: b.urlKey, count: b.count, path: b.path });
      }
    }
    if (facet.attribute === 'brand') {
      for (const b of facet.buckets || []) brandFacet.set(b.title, b.count);
    }
  }
}

const catFacet = (facetsFirst || []).find((f) => f.attribute === 'categories' || f.attribute === 'categoryPath');
const rawCats = (catFacet?.buckets || []).map((b) => ({
  id: b.id,
  name: b.name || b.title,
  urlPath: b.urlPath || b.path,
  urlKey: b.urlKey,
  count: b.count,
  path: b.path || null,
}));

// ---------- 2. 分类树（用 facet 的 path 层级重建） ----------
// facet path 形如 "health-care/supplements"，urlPath 同形
const catByPath = new Map();
for (const c of rawCats) catByPath.set(c.urlPath, { ...c, children: [] });
const roots = [];
for (const c of [...catByPath.values()].sort((a, b) => a.urlPath.split('/').length - b.urlPath.split('/').length)) {
  const seg = c.urlPath.split('/');
  let parent = null;
  for (let cut = seg.length - 1; cut >= 1; cut--) {
    const p = catByPath.get(seg.slice(0, cut).join('/'));
    if (p) { parent = p; break; }
  }
  if (parent) parent.children.push(c);
  else roots.push(c);
}
const cats = [...catByPath.values()];

// ---------- 3. 品牌 ----------
const brandAgg = new Map();
for (const p of products) {
  if (!p.brand) continue;
  const cur = brandAgg.get(p.brand) || { name: p.brand, slug: slugify(p.brand), count: 0, products: 0 };
  cur.products++;
  cur.count = brandFacet.get(p.brand) ?? cur.count;
  brandAgg.set(p.brand, cur);
}
const brands = [...brandAgg.values()].sort((a, b) => b.products - a.products);

function slugify(s) {
  return String(s)
    .trim()
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'x';
}

// ---------- 4. PDP 合并 ----------
const pdpFiles = (await fs.readdir(path.join(RAW, 'pdp'))).filter((f) => f.startsWith('batch-')).sort();
const pdpBySku = new Map();
for (const f of pdpFiles) {
  const j = await readJson(path.join(RAW, 'pdp', f), null);
  for (const it of j?.data?.productsV3?.items || []) pdpBySku.set(it.sku, it);
}

const detail = {};
let pdpMatched = 0;
for (const p of products) {
  const d = pdpBySku.get(p.sku);
  if (!d) continue;
  pdpMatched++;
  const fd = d.frontend_description || {};
  detail[p.sku] = {
    sku: p.sku,
    name: d.name,
    urlKey: d.url_key,
    metaTitle: d.meta_title,
    metaDescription: d.meta_description,
    metaKeyword: d.meta_keyword,
    descriptionHtml: d.description?.html || fd.description?.html || '',
    shortDescriptionHtml: d.short_description?.html || '',
    productUsage: fd.product_usage || '',
    skinType: fd.skin_type || '',
    ingredients: fd.ingredients || '',
    disclaimers: fd.disclaimers || '',
    ageGroup: fd.age_group || '',
    storage: fd.storage || '',
    howToUseHtml: d.how_to_use?.html || '',
    deliveryReturnHtml: d.delivery_return?.html || '',
    country: d.country_origin_name || null,
    productSize: d.product_size || null,
    stockStatus: d.stock_status,
    maxOrderQty: d.max_order_qty,
    atpQty: d.atp_qty,
    purchaseCount: d.purchase_count_label || null,
    gallery: (d.media_gallery_entries || []).map((g) => ({ file: g.file, label: g.label, position: g.position })),
    brand: d.brand_information ? { id: d.brand_information.brand_id, name: d.brand_information.name, urlPath: d.brand_information.url_path } : null,
    categories: (d.categories || []).map((c) => ({ uid: c.uid, name: c.name, level: c.level })),
    offers: (d.offers || []).map((o) => ({
      id: o.id,
      name: o.name,
      promoId: o.promo_id,
      distributionPromoId: o.distribution_promo_id,
      ruleCode: o.rule_code,
      description: o.description,
      message: (o.content || []).map((c) => c.message).filter(Boolean)[0] || '',
    })),
    related: (d.related_products || []).map((r) => ({ sku: r.sku, name: r.name, urlKey: r.url_key })),
    attributes: (d.custom_attributes || []).map((a) => {
      const meta = a.attribute_metadata || {};
      const val = a.selected_attribute_options?.[0]?.attribute_option?.label ?? a.entered_attribute_value?.value ?? '';
      return { code: meta.code, label: typeof meta.label === 'string' ? meta.label : (meta.attribute_labels?.[0]?.label ?? meta.code), value: val };
    }).filter((a) => a.code && a.value),
    configurable: d.configurable_options
      ? {
          options: d.configurable_options.map((o) => ({ code: o.attribute_code, label: o.label, values: o.values.map((v) => ({ label: v.label, storeLabel: v.store_label, index: v.value_index })) })),
          variants: (d.variants || []).map((v) => ({
            sku: v.product?.sku,
            attributes: Object.fromEntries((v.attributes || []).map((a) => [a.code, a.value_index])),
            price: v.product?.price_range?.maximum_price?.final_price?.value ?? null,
          })),
        }
      : null,
  };
}

// ---------- 5. 分类->商品索引 ----------
// 用 PDP 的 categories（name 链不完整），改用 urlKey 前缀不可靠；
// 这里用搜索网关按分类查询（build 阶段按需生成），仅存 facet 计数。
const catalog = {
  scrapedAt: new Date().toISOString(),
  totalCount: total,
  productCount: products.length,
  pdpMatched,
  products,
  categories: cats,
  categoryTree: roots,
  brands,
};

await writeJson(path.join(DATA, 'catalog.json'), catalog);
await writeJson(path.join(DATA, 'details.json'), detail);
await writeJson(path.join(DATA, 'categories.json'), { cats, roots, raw: rawCats });

console.log('products:', products.length, '/', total);
console.log('pdp matched:', pdpMatched, 'details:', Object.keys(detail).length);
console.log('categories:', cats.length, 'roots:', roots.map((r) => r.urlPath).join(', '));
console.log('brands:', brands.length);
console.log('sample product:', JSON.stringify(products[0]).slice(0, 500));

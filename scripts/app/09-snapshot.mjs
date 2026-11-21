// scripts/app/09-snapshot.mjs —— 用已验证的 fetch.ps1 批量通道预热 GraphQL 快照
// 用法：node scripts/app/09-snapshot.mjs [pdp|cats|posts|coupons|all]
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { ROOT, DATA, readJson, writeJson } from '../lib/api.mjs';
import { graphqlKey } from './keys.mjs';
import { Q, COUPON_VARS } from './queries.mjs';

const ORIGIN = 'https://www.mannings.com.hk';
const CACHE = path.join(ROOT, 'cache', 'graphql');
const QDIR = path.join(ROOT, 'cache', 'queries');
const RAW = path.join(DATA, 'raw');
const stage = process.argv[2] || 'all';
await fs.mkdir(CACHE, { recursive: true });

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const catsRaw = await readJson(path.join(DATA, 'categories.json'), null);
const products = catalog.products;

async function captured(op) {
  try { return (await fs.readFile(path.join(QDIR, op + '.txt'), 'utf8')).trim(); } catch { return null; }
}
const exists = async (p) => { try { await fs.stat(p); return true; } catch { return false; } };

function entry(op, vars, query) {
  const key = graphqlKey({ operationName: op, variables: vars, query });
  const u = new URL(ORIGIN + '/graphql');
  u.searchParams.set('query', query);
  u.searchParams.set('operationName', op);
  u.searchParams.set('variables', JSON.stringify(vars));
  return { key, url: u.toString(), file: 'cache/graphql/' + key + '.json' };
}

async function buildJobs(list) {
  const jobs = [];
  let skip = 0, n = 0;
  for (const it of list) {
    if (await exists(path.join(ROOT, it.file))) { skip++; continue; }
    jobs.push({ id: 's' + (++n).toString().padStart(5, '0'), url: it.url, file: it.file });
  }
  return { jobs, skip };
}

async function runPs(jobs, tag, concurrency = 8) {
  if (!jobs.length) { console.log(`[${tag}] 无需抓取`); return; }
  const jf = path.join(RAW, `snap-${tag}.json`);
  await writeJson(jf, jobs);
  console.log(`[${tag}] 待抓 ${jobs.length}`);
  await new Promise((resolve, reject) => {
    const p = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts/ps/fetch.ps1',
      '-Stage', 'media', '-JobsFile', jf, '-Concurrency', String(concurrency), '-Retries', '6'], { cwd: ROOT, stdio: 'inherit' });
    p.on('close', (c) => (c === 0 ? resolve() : reject(new Error('ps exit ' + c))));
  });
}

const pdpQuery = (await captured('getProductDetailForProductPage')) || Q.pdp;
const postsQuery = (await captured('getPostListQueryByProductId')) || Q.posts;
const couponQuery = (await captured('getCouponListing')) || Q.coupon;
const bcPathQuery = (await captured('GetBreadcrumbs')) || Q.breadcrumbByPath;

if (stage === 'pdp' || stage === 'all') {
  const list = products.map((p) => entry('getProductDetailForProductPage', { sku: p.sku }, pdpQuery));
  const { jobs, skip } = await buildJobs(list);
  console.log(`[pdp] 已有 ${skip} / ${list.length}`);
  await runPs(jobs, 'pdp', 8);
}

if (stage === 'cats' || stage === 'all') {
  const uids = new Set();
  for (const f of await fs.readdir(path.join(RAW, 'cats'))) {
    if (!f.startsWith('cat-')) continue;
    const j = await readJson(path.join(RAW, 'cats', f), null);
    for (const c of j?.data?.categories?.items || []) uids.add(c.uid);
  }
  const paths = [...new Set((catsRaw?.cats || []).map((c) => c.urlPath).filter(Boolean))];
  const list = [];
  for (const uid of uids) list.push(entry('GetBreadcrumbs', { category_id: uid }, Q.breadcrumbByUid));
  for (const p of paths) {
    list.push(entry('GetBreadcrumbs', { urlPath: p }, bcPathQuery));
    list.push(entry('getCategoryData', { urlPath: p }, (await captured('getCategoryData')) || Q.categoryData));
  }
  const { jobs, skip } = await buildJobs(list);
  console.log(`[cats] 已有 ${skip} / ${list.length}`);
  await runPs(jobs, 'cats', 6);
}

if (stage === 'posts' || stage === 'all') {
  const list = [];
  for (const p of products) {
    const key = graphqlKey({ operationName: 'getProductDetailForProductPage', variables: { sku: p.sku } });
    const f = path.join(CACHE, key + '.json');
    if (!(await exists(f))) continue;
    try {
      const j = JSON.parse(await fs.readFile(f, 'utf8'));
      const it = j?.data?.productsV3?.items?.[0];
      if (it?.id) list.push(entry('getPostListQueryByProductId', { relatedproduct_id: String(it.id) }, postsQuery));
    } catch { }
  }
  const { jobs, skip } = await buildJobs(list);
  console.log(`[posts] 已有 ${skip} / ${list.length}`);
  await runPs(jobs, 'posts', 8);
}

if (stage === 'coupons' || stage === 'all') {
  const ids = new Set();
  for (const p of products) {
    const key = graphqlKey({ operationName: 'getProductDetailForProductPage', variables: { sku: p.sku } });
    const f = path.join(CACHE, key + '.json');
    if (!(await exists(f))) continue;
    try {
      const j = JSON.parse(await fs.readFile(f, 'utf8'));
      for (const o of j?.data?.productsV3?.items?.[0]?.offers || []) if (o.promo_id) ids.add(String(o.promo_id));
    } catch { }
  }
  const list = [...ids].map((pid) => entry('getCouponListing', COUPON_VARS([pid, null]), couponQuery));
  const { jobs, skip } = await buildJobs(list);
  console.log(`[coupons] promo_ids ${ids.size}，已有 ${skip}`);
  await runPs(jobs, 'coupons', 6);
}

const files = await fs.readdir(CACHE);
let bytes = 0;
for (const f of files) bytes += (await fs.stat(path.join(CACHE, f))).size;
console.log(`\n快照总数 ${files.filter((f) => f.endsWith('.json'))}，${(bytes / 1048576).toFixed(1)} MB`);

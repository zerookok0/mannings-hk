// scripts/app/04-warm.mjs —— 预热 GraphQL 快照（把前端会发的每个请求都抓成静态响应）
// 快照键与线上 Function 一致：sha256(operationName | 规范化 variables)
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import fsSync from 'node:fs';
import { ROOT, DATA, readJson } from '../lib/api.mjs';
import { graphqlKey } from './keys.mjs';
import { Q, COUPON_VARS } from './queries.mjs';

const ORIGIN = 'https://www.mannings.com.hk';
const CACHE = path.join(ROOT, 'cache', 'graphql');
const WORKERS = Number(process.env.WORKERS || 3);
await fs.mkdir(CACHE, { recursive: true });

const catalog = await readJson(path.join(DATA, 'catalog.json'), null);
const catsRaw = await readJson(path.join(DATA, 'categories.json'), null);
if (!catalog) { console.error('缺少 data/catalog.json'); process.exit(1); }

function urlFor(op, vars, query) {
  const u = new URL(ORIGIN + '/graphql');
  u.searchParams.set('query', query);
  u.searchParams.set('operationName', op);
  u.searchParams.set('variables', JSON.stringify(vars));
  return u.toString();
}
const exists = async (p) => { try { await fs.stat(p); return true; } catch { return false; } };

// ---------- 常驻 worker 池：一进程一槽，死了就换新的，任务永不丢 ----------
class Pool {
  constructor(n) {
    this.n = n; this.q = []; this.busy = new Map(); this.live = new Set();
    this.killed = false; this.done = 0; this.fail = 0; this.total = 0; this.res = null; this.t0 = Date.now();
  }
  start() { this.killed = false; for (let i = 0; i < this.n; i++) this.spawn(); }
  spawn() {
    const p = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts/ps/worker.ps1'], { cwd: ROOT });
    this.live.add(p);
    let buf = '';
    p.stdout.on('data', (d) => {
      buf += d.toString();
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim();
        buf = buf.slice(i + 1);
        if (line) this.deliver(p, line);
      }
    });
    p.stderr.on('data', () => {});
    p.stdin.on('error', () => {});
    p.on('close', () => {
      this.live.delete(p);
      const lost = this.busy.get(p);
      this.busy.delete(p);
      if (lost) { this.q.unshift(lost); this.fail++; }
      if (!this.killed) setTimeout(() => { if (!this.killed) { this.spawn(); this.feedAll(); } else this.checkDone(); }, 250);
      else this.checkDone();
    });
    this.feed(p);
    return p;
  }
  deliver(p, line) {
    const [id, status] = line.split('\t');
    this.busy.delete(p);
    if (status === '200') this.done++; else this.fail++;
    const n = this.done + this.fail;
    if (n % 200 === 0) {
      const el = (Date.now() - this.t0) / 1000;
      const rate = n / Math.max(0.001, el);
      console.log(`  ${this.done}/${this.total} ok, ${this.fail} fail, ${rate.toFixed(1)}/s, 剩余 ~${Math.round((this.total - n) / Math.max(0.1, rate))}s`);
    }
    this.feed(p);
  }
  feed(p) {
    if (this.killed || !this.live.has(p) || this.busy.has(p)) return;
    const t = this.q.shift();
    if (!t) { this.checkDone(); return; }
    this.busy.set(p, t);
    try { p.stdin.write(JSON.stringify(t) + '\n'); }
    catch { this.busy.delete(p); this.q.unshift(t); }
  }
  feedAll() { for (const p of this.live) this.feed(p); }
  run(tasks) {
    this.q = tasks.slice();
    this.total = tasks.length; this.done = 0; this.fail = 0; this.t0 = Date.now();
    if (!this.live.size) this.start(); else this.feedAll();
    return new Promise((resolve) => { this.res = resolve; this.checkDone(); });
  }
  checkDone() {
    if (this.q.length === 0 && this.busy.size === 0 && this.res) { const r = this.res; this.res = null; r(); }
  }
  kill() { this.killed = true; for (const p of this.live) { try { p.stdin.write('__EXIT__\n'); } catch {} try { p.kill(); } catch {} } }
}

const pool = new Pool(WORKERS);

async function runWave(name, tasks) {
  const todo = [];
  for (const t of tasks) if (!(await exists(t.out))) todo.push(t);
  console.log(`\n[${name}] 任务 ${tasks.length}，待抓 ${todo.length}`);
  if (!todo.length) return;
  await pool.run(todo);
  console.log(`[${name}] 完成：ok=${pool.done} fail=${pool.fail}`);
}

function task(op, vars, query) {
  const key = graphqlKey({ operationName: op, variables: vars, query });
  return { id: `${op}:${key}`, url: urlFor(op, vars, query), out: path.join(CACHE, key + '.json') };
}

// ---------- Wave 1：固定查询 ----------
const fixed = [
  task('Megamenu', {}, Q.megamenu),
  task('getStoreConfigData', {}, Q.storeConfig),
  task('getAvailableStoresData', {}, Q.availableStores),
  task('searchTrending', {}, Q.searchTrending),
  task('SearchQueries', { isMobile: false }, Q.searchQueries),
  task('GetStoresInfo', { command: 'get_stores_info', input: { isFavoriteOnly: false } }, Q.storesInfo),
];
for (const id of ['home', 'promotions', 'brandzone', 'travelessentials', 'mannings_exclusive', '1111-easy-stamp',
  'gen-m-women-health', 'mannings-payme-offer', 'important-security-alert', 'health', 'pharmacy-services',
  'wellness-profile', 'privacy-policy', 'terms-of-use', 'website-terms-and-conditions', 'about-mannings', 'join-us',
  'pics', 'legal-notice-and-disclaimer', 'how-to-shop', 'home-delivery', 'click-and-collect-service',
  'corporatesolutions', 'mngwhatsapptnc', 'services-community-health', 'faq', 'contact-us', 'store-finder']) {
  fixed.push(task('GetCmsPage', { identifier: id, _deliveryOption: 'combined' }, Q.cmsPage));
}
await runWave('固定查询', fixed);

// ---------- Wave 2：商品详情 ----------
const products = catalog.products;
const LIMIT = Number(process.env.WARM_LIMIT || 0);
const pdpList = products.map((p) => task('getProductDetailForProductPage', { sku: p.sku }, Q.pdp));
await runWave('商品详情', LIMIT ? pdpList.slice(0, LIMIT) : pdpList);

// ---------- Wave 3：分类面包屑 ----------
const catUids = new Set();
for (const f of await fs.readdir(path.join(DATA, 'raw', 'cats'))) {
  if (!f.startsWith('cat-')) continue;
  const j = await readJson(path.join(DATA, 'raw', 'cats', f), null);
  for (const c of j?.data?.categories?.items || []) catUids.add(c.uid);
}
const catPaths = new Set((catsRaw?.cats || []).map((c) => c.urlPath).filter(Boolean));
const catTasks = [];
for (const uid of catUids) catTasks.push(task('GetBreadcrumbs', { category_id: uid }, Q.breadcrumbByUid));
for (const p of catPaths) {
  catTasks.push(task('GetBreadcrumbs', { urlPath: p }, Q.breadcrumbByPath));
  catTasks.push(task('getCategoryData', { urlPath: p }, Q.categoryData));
}
await runWave('分类与面包屑', catTasks);

// ---------- Wave 4：文章 + 优惠券 ----------
const postsTasks = [];
const couponIds = new Set();
for (const p of products) {
  const key = graphqlKey({ operationName: 'getProductDetailForProductPage', variables: { sku: p.sku } });
  const file = path.join(CACHE, key + '.json');
  if (!(await exists(file))) continue;
  try {
    const j = JSON.parse(await fs.readFile(file, 'utf8'));
    const item = j?.data?.productsV3?.items?.[0];
    if (!item) continue;
    if (item.id) postsTasks.push(task('getPostListQueryByProductId', { relatedproduct_id: String(item.id) }, Q.posts));
    for (const o of item.offers || []) if (o.promo_id) couponIds.add(String(o.promo_id));
  } catch { }
}
console.log('\n唯一 promo_id:', couponIds.size);
await runWave('健康频道文章', postsTasks);
await runWave('优惠券', [...couponIds].map((pid) => task('getCouponListing', COUPON_VARS([pid, null]), Q.coupon)));

pool.kill();

const files = await fs.readdir(CACHE);
let bytes = 0;
for (const f of files) bytes += (await fs.stat(path.join(CACHE, f))).size;
console.log(`\n快照总数 ${files.length}，${(bytes / 1048576).toFixed(1)} MB`);
process.exit(0);

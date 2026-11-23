// scripts/sf/02-build.mjs —— 组装店铺 dist（应用 + 数据 + 版本化资源 + 路由/缓存头）
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { ROOT } from '../lib/api.mjs';

const SRC = path.join(ROOT, 'sf', 'src');
const DATA = path.join(ROOT, 'sf', 'data');
const DIST = path.join(ROOT, 'sf', 'dist');

await fs.rm(DIST, { recursive: true, force: true });
await fs.mkdir(DIST, { recursive: true });

await fs.cp(SRC, DIST, { recursive: true });
await fs.cp(DATA, path.join(DIST, 'data'), { recursive: true });

// /bp 契约资产（面板侧原样提供）
const BP_SRC = 'C:\\Users\\Admin\\Desktop\\_bp_unzip2';   // bp-connector-20261121 (2)
await fs.cp(BP_SRC, path.join(DIST, 'bp'), { recursive: true });
// 像素 ID 注入（sf/pixel.json 一处配置，全站 HTML 替换）
const PIX = JSON.parse(await fs.readFile(path.join(ROOT, 'sf', 'pixel.json'), 'utf8'));
const FB_ID = (PIX.fb_pixel_id || '').trim();
if (FB_ID) {
  async function walkHtml(dir) {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await walkHtml(p);
      else if (e.name.endsWith('.html')) {
        let s = await fs.readFile(p, 'utf8');
        if (s.includes('__FB_PIXEL_ID__')) {
          s = s.split('__FB_PIXEL_ID__').join(FB_ID);
          await fs.writeFile(p, s, 'utf8');
        }
      }
    }
  }
  await walkHtml(DIST);
  console.log('FB Pixel ID 注入:', FB_ID);
} else {
  console.log('未配置 FB Pixel ID（sf/pixel.json 为空），跳过注入');
}
// 资源版本化：app.<hash>.js / styles.<hash>.css，避免浏览器缓存旧版
const hash = (buf) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 10);
const jsBuf = await fs.readFile(path.join(DIST, 'app.js'));
const cssBuf = await fs.readFile(path.join(DIST, 'styles.css'));
const jsName = 'app.' + hash(jsBuf) + '.js';
const cssName = 'styles.' + hash(cssBuf) + '.css';
await fs.rename(path.join(DIST, 'app.js'), path.join(DIST, jsName));
await fs.rename(path.join(DIST, 'styles.css'), path.join(DIST, cssName));

// 结账页脚本也版本化
const ckBuf = await fs.readFile(path.join(DIST, 'checkout', 'checkout.js'));
const ckName = 'checkout.' + hash(ckBuf) + '.js';
await fs.rename(path.join(DIST, 'checkout', 'checkout.js'), path.join(DIST, 'checkout', ckName));
let ckHtml = await fs.readFile(path.join(DIST, 'checkout', 'index.html'), 'utf8');
ckHtml = ckHtml.replace('/checkout/checkout.js', '/checkout/' + ckName);
await fs.writeFile(path.join(DIST, 'checkout', 'index.html'), ckHtml, 'utf8');
let html = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
html = html.replace('./styles.css', './' + cssName).replace('./app.js', './' + jsName);
await fs.writeFile(path.join(DIST, 'index.html'), html, 'utf8');

await fs.writeFile(path.join(DIST, '_headers'), [
  '/index.html', '  Cache-Control: no-cache',
  '/*.js', '  Cache-Control: public, max-age=31536000, immutable',
  '/*.css', '  Cache-Control: public, max-age=31536000, immutable',
  '/data/*', '  Cache-Control: no-cache',
  '',
].join(String.fromCharCode(10)), 'utf8');

// Workers 静态资源用 not_found_handling，不写 _redirects（会触发无限循环校验）

async function walk(dir, base = '') {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), rel)));
    else out.push(rel);
  }
  return out;
}
const files = await walk(DIST);
let bytes = 0;
for (const f of files) bytes += (await fs.stat(path.join(DIST, f))).size;
console.log('dist:', files.length, 'files,', (bytes / 1048576).toFixed(1), 'MB', '| js=' + jsName, 'css=' + cssName);

// scripts/app/01-capture.mjs —— 抓取原站 PWA 应用本体（HTML 外壳 + webpack 全部 chunk + venia 静态资源）
// 目标：本地/线上可以直接跑起同一个 React 应用，做到「看不出任何不同」
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { ROOT, DATA, readJson, writeJson } from '../lib/api.mjs';

const APP = path.join(ROOT, 'app');
const ORIGIN = 'https://www.mannings.com.hk';
const JOBS = path.join(DATA, 'raw', 'app-jobs.json');

async function psFetch(jobs, concurrency = 8) {
  await writeJson(JOBS, jobs);
  await new Promise((resolve, reject) => {
    const p = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts/ps/fetch.ps1',
      '-Stage', 'media', '-JobsFile', JOBS, '-Concurrency', String(concurrency), '-Retries', '6'], { cwd: ROOT, stdio: 'inherit' });
    p.on('close', (c) => (c === 0 ? resolve() : reject(new Error('ps exit ' + c))));
  });
}

const jobs = [];
const add = (url, file) => jobs.push({ id: 'a' + jobs.length.toString().padStart(4, '0'), url, file });

// 1. HTML 外壳（任一路由都返回同一份 shell）
add(ORIGIN + '/zh-hant/', 'app/index.html');

// 2. 入口与已知 chunk
const known = [
  '/runtime.57bf96b4e566d8aae5d5.js', '/vendors.17f81cb3ce3ab68f2814.js', '/client.d5aab5089e2851a8618a.js',
  '/i18n-zh_HK.d7bcd454a1519004255c.js', '/RootCmp_CATEGORY__default.4e07f3b8a9a0d3fbdbbd.js',
  '/venia-static-assets/css/DFGDomestic_responsive.css',
];
for (const k of known) add(ORIGIN + k, 'app/' + k.replace(/^\//, ''));

await psFetch(jobs);
console.log('外壳 + 入口 chunk 完成');

// 3. 从 runtime 里解析全部 chunk 文件名
const runtimeFile = path.join(APP, 'runtime.57bf96b4e566d8aae5d5.js');
const runtime = await fs.readFile(runtimeFile, 'utf8');
const chunkMap = new Map();
// webpack5: "./Name.js":"hash"  /  "id":"hash"；同时兼容 u(e){return e+"."+{...}[e]+".js"}
for (const m of runtime.matchAll(/"([A-Za-z0-9_~\-/.]+?)"\s*:\s*"([0-9a-f]{8,})"/g)) chunkMap.set(m[1], m[2]);
console.log('runtime 中解析出 chunk 映射:', chunkMap.size);

// 4. 扫 shell / css / 已下载 js 里出现的 /xxx.js 与 /venia-static* 资源
const discovered = new Set();
const scanFiles = ['index.html'].map((f) => path.join(APP, f));
scanFiles.push(path.join(APP, 'client.d5aab5089e2851a8618a.js'));
scanFiles.push(path.join(APP, 'venia-static-assets/css/DFGDomestic_responsive.css'));
for (const f of scanFiles) {
  let txt = '';
  try { txt = await fs.readFile(f, 'utf8'); } catch { continue; }
  for (const m of txt.matchAll(/(?:https?:\/\/www\.mannings\.com\.hk)?\/(venia-static[^"')\s]*)/g)) discovered.add('/' + m[1]);
  for (const m of txt.matchAll(/(?:https?:\/\/www\.mannings\.com\.hk)?\/([A-Za-z0-9_.~\-]+\.js)/g)) discovered.add('/' + m[1]);
}

// chunk 文件：webpack 的 chunk 名形如 43.<hash>.js，用 runtime 映射补齐
for (const [name, hash] of chunkMap) {
  if (name.endsWith('.js')) discovered.add('/' + name);
  else discovered.add('/' + name + '.' + hash + '.js');
}

const chunkJobs = [];
for (const u of [...discovered].sort()) {
  if (!/\.(js|css|png|svg|webp|jpg|jpeg|gif|ico|woff2?|json|txt)$/i.test(u)) continue;
  const file = 'app/' + u.replace(/^\//, '');
  if (jobs.some((j) => j.file === file)) continue;
  chunkJobs.push({ id: 'b' + chunkJobs.length.toString().padStart(4, '0'), url: ORIGIN + u, file });
}
console.log('待补抓资源:', chunkJobs.length);
await psFetch(chunkJobs, 10);

// 5. 统计
async function walk(dir, base = '') {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), rel)));
    else out.push(rel);
  }
  return out;
}
const files = await walk(APP);
let bytes = 0;
for (const f of files) bytes += (await fs.stat(path.join(APP, f))).size;
console.log('app 文件数:', files.length, '|', (bytes / 1048576).toFixed(1), 'MB');
const js = files.filter((f) => f.endsWith('.js'));
console.log('js chunk 数:', js.length);

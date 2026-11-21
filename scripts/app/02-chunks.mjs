// scripts/app/02-chunks.mjs —— 解析 webpack runtime 的 chunk 映射并抓全所有 chunk
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { ROOT, DATA, writeJson } from '../lib/api.mjs';

const APP = path.join(ROOT, 'app');
const ORIGIN = 'https://www.mannings.com.hk';
const JOBS = path.join(DATA, 'raw', 'chunk-jobs.json');

const rtFile = (await fs.readdir(APP)).find((f) => f.startsWith('runtime.') && f.endsWith('.js'));
const rt = await fs.readFile(path.join(APP, rtFile), 'utf8');

function grabMap(afterKey) {
  const i = rt.indexOf(afterKey);
  if (i < 0) return {};
  const seg = rt.slice(i, i + 6000);
  const start = seg.indexOf('{');
  let depth = 0, end = -1;
  for (let k = start; k < seg.length; k++) {
    if (seg[k] === '{') depth++;
    else if (seg[k] === '}') { depth--; if (depth === 0) { end = k; break; } }
  }
  const body = seg.slice(start + 1, end);
  const out = {};
  for (const m of body.matchAll(/(\d+)\s*:\s*"([^"]+)"/g)) out[m[1]] = m[2];
  return out;
}

const names = grabMap('jsonpScriptSrc');
const hashes = grabMap('.p+""+({\n') && Object.keys(names).length ? grabMap('jsonpScriptSrc}) + "."') : {};
// 直接取 jsonpScriptSrc 里第二个花括号块（hash 表）
const srcIdx = rt.indexOf('jsonpScriptSrc');
const seg = rt.slice(srcIdx, srcIdx + 8000);
const blocks = [];
{
  let depth = 0, start = -1;
  for (let k = 0; k < seg.length; k++) {
    if (seg[k] === '{') { if (depth === 0) start = k; depth++; }
    else if (seg[k] === '}') { depth--; if (depth === 0) blocks.push(seg.slice(start + 1, k)); }
    if (blocks.length >= 2) break;
  }
}
const nameMap = {}, hashMap = {};
for (const m of rt.matchAll(/(\d+):"([^"]+)"/g)) {
  const [, id, val] = m;
  if (/^[0-9a-f]{20}$/.test(val)) hashMap[id] = val;
  else if (!nameMap[id]) nameMap[id] = val;
}
console.log('nameMap:', Object.keys(nameMap).length, 'hashMap:', Object.keys(hashMap).length);

const urls = new Set();
for (const id of Object.keys(hashMap)) {
  const name = nameMap[id] || id;
  urls.add(`/${name}.${hashMap[id]}.js`);
}
console.log('chunk 总数:', urls.size);

const jobs = [];
let n = 0;
for (const u of [...urls].sort()) {
  jobs.push({ id: 'c' + (++n).toString().padStart(4, '0'), url: ORIGIN + u, file: 'app/' + u.replace(/^\//, '') });
}

await writeJson(JOBS, jobs);
await new Promise((resolve, reject) => {
  const p = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', 'scripts/ps/fetch.ps1',
    '-Stage', 'media', '-JobsFile', JOBS, '-Concurrency', '10', '-Retries', '5'], { cwd: ROOT, stdio: 'inherit' });
  p.on('close', (c) => (c === 0 ? resolve() : reject(new Error('ps exit ' + c))));
});

const have = (await fs.readdir(APP)).filter((f) => f.endsWith('.js'));
console.log('本地 js 文件:', have.length, '/', urls.size + 4);

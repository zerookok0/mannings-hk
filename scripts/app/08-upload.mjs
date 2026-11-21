// scripts/app/08-upload.mjs —— 批量上传到 R2（经临时 uploader Worker，断点续传）
// 用法：UPLOADER_URL=... UPLOAD_TOKEN=... node scripts/app/08-upload.mjs [--dry-run]
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from '../lib/api.mjs';

const URL_BASE = (process.env.UPLOADER_URL || '').replace(/\/+$/, '');
const TOKEN = process.env.UPLOAD_TOKEN || '';
const CONCURRENCY = Number(process.env.CONCURRENCY || 24);
const DRY = process.argv.includes('--dry-run');
if (!URL_BASE || !TOKEN) { console.error('缺少 UPLOADER_URL / UPLOAD_TOKEN'); process.exit(1); }

const MIME = { '.json': 'application/json', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif', '.svg': 'image/svg+xml' };

async function walk(dir, base = '') {
  const out = [];
  let ents = [];
  try { ents = await fs.readdir(dir, { withFileTypes: true }); } catch { return out; }
  for (const e of ents) {
    const rel = base ? base + '/' + e.name : e.name;
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), rel)));
    else out.push(rel);
  }
  return out;
}

async function listRemote(prefix) {
  const set = new Set();
  let cursor = '';
  for (;;) {
    const u = new URL(URL_BASE + '/keys');
    u.searchParams.set('prefix', prefix);
    if (cursor) u.searchParams.set('cursor', cursor);
    const r = await fetch(u, { headers: { 'x-upload-token': TOKEN } });
    if (!r.ok) throw new Error('list failed ' + r.status);
    const j = await r.json();
    for (const k of j.keys) set.add(k);
    if (!j.cursor) break;
    cursor = j.cursor;
  }
  return set;
}

async function put(key, file) {
  const body = await fs.readFile(file);
  const u = new URL(URL_BASE + '/upload');
  u.searchParams.set('key', key);
  const r = await fetch(u, {
    method: 'PUT',
    headers: { 'x-upload-token': TOKEN, 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' },
    body,
  });
  if (!r.ok) throw new Error(`put ${key} -> ${r.status}`);
}

// 1) GraphQL 快照
const snapDir = path.join(ROOT, 'cache', 'graphql');
const snaps = await walk(snapDir);
console.log('快照文件:', snaps.length);

// 2) 图片
const mediaDir = path.join(ROOT, process.env.MEDIA_DIR || 'site/media');
const media = await walk(mediaDir);
console.log('图片目录:', mediaDir, '文件数:', media.length);

const remoteSnap = await listRemote('graphql/');
const remoteMedia = await listRemote('media/');
console.log('远端已有:', remoteSnap.size, '快照 /', remoteMedia.size, '图片');

const tasks = [];
for (const f of snaps) {
  const key = 'graphql/' + f;
  if (!remoteSnap.has(key)) tasks.push({ key, file: path.join(snapDir, f) });
}
for (const f of media) {
  const key = 'media/' + f;
  if (!remoteMedia.has(key)) tasks.push({ key, file: path.join(mediaDir, f) });
}
console.log('待上传:', tasks.length);
if (DRY) process.exit(0);

let i = 0, ok = 0, bad = 0;
const t0 = Date.now();
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, tasks.length) }, async () => {
  for (;;) {
    const idx = i++;
    if (idx >= tasks.length) return;
    const t = tasks[idx];
    try {
      await put(t.key, t.file);
      ok++;
    } catch (e) {
      bad++;
      if (bad < 12) console.error('  ✗', t.key, e.message);
    }
    if ((ok + bad) % 500 === 0) {
      const el = (Date.now() - t0) / 1000;
      console.log(`  ${ok}/${tasks.length} 上传完成，${(ok / el).toFixed(1)}/s，失败 ${bad}`);
    }
  }
}));
console.log(`完成：ok=${ok} fail=${bad}，用时 ${((Date.now() - t0) / 1000).toFixed(0)}s`);

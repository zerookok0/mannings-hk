// scripts/app/05c-patch-sw.mjs —— 给生成的 sw 注入「路由解析器」，让 ResolveURL/cmsBlocks 不再依赖快照
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from '../lib/api.mjs';

const p = path.join(ROOT, 'pages', 'dist', 'sw-mirror.js');
let sw = await fs.readFile(p, 'utf8');

if (!sw.includes('function synthRoute')) {
  const synth = `
// —— 路由解析合成：原站用 ResolveURL 决定渲染哪个页面，这里按 URL 形态直接给出答案 ——
function synthRoute(rawUrl) {
  let u = String(rawUrl || '/').split('#')[0].split('?')[0];
  if (!u.startsWith('/')) u = '/' + u;
  const p = u.replace(/^\\/zh-hant/i, '') || '/';
  const route = (type, extra) => ({ data: { route: Object.assign({ type, relative_url: u, redirect_code: 0, __typename: 'RoutableInterface' }, extra) } });
  if (p === '/' || p === '') return route('CMS_PAGE', { identifier: 'home', __typename: 'CmsPage' });
  const mProd = p.match(/\\/p\\/(\\d+)\\/?$/);
  if (mProd) return route('PRODUCT', { uid: null, __typename: 'ProductInterface' });
  const mCat = p.match(/^\\/c\\/([a-z0-9\\-\\/]+)\\/?$/i);
  if (mCat) return route('CATEGORY', { uid: null, __typename: 'CategoryInterface' });
  const rest = p.replace(/^\\//, '').replace(/\\/$/, '');
  const seg = rest.split('/');
  const isLookup = /^(partners|search|login|cart|checkout|account|brands|offers)$/i.test(seg[0] || '');
  if (!isLookup) return route('CMS_PAGE', { identifier: seg[seg.length - 1], __typename: 'CmsPage' });
  return { data: { route: null } };
}
`;
  sw = sw.replace('async function handleGraphql(request) {', synth + '\nasync function handleGraphql(request) {');
}

// ResolveURL 与 cmsBlocks 直接合成，不再查快照
if (!sw.includes("if (op === 'ResolveURL')")) {
  sw = sw.replace(
    "  const key = await keyFor(op, vars, query);",
    "  if (op === 'ResolveURL') { let v = {}; try { v = typeof vars === 'string' ? JSON.parse(vars) : (vars || {}); } catch (e) { } return new Response(JSON.stringify(synthRoute(v.url)), { headers: { 'content-type': 'application/json; charset=utf-8', 'x-mirror': 'synth-route' } }); }\n  if (op === 'cmsBlocks') { return new Response(JSON.stringify({ data: { cmsBlocks: { items: [] } } }), { headers: { 'content-type': 'application/json; charset=utf-8', 'x-mirror': 'synth-blocks' } }); }\n  const key = await keyFor(op, vars, query);"
  );
}

await fs.writeFile(p, sw, 'utf8');
console.log('sw patched:', (await fs.stat(p)).size, 'bytes; has synthRoute:', sw.includes('function synthRoute'));

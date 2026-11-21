// Cloudflare Pages Function: /graphql
// 1) 先取 R2 快照（键 = operationName + 规范化 variables，与本地预热一致）
// 2) 未命中则回源 mannings.com.hk，成功即写入 R2
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const CACHE_ID = '62d2b26f1cda94c69aaada85b80382dd2b6853d7cb6160fbbb0af49892021962';

function canonical(v) {
  if (v == null) return {};
  if (typeof v === 'string') { try { v = JSON.parse(v); } catch { return {}; } }
  const sort = (o) => Array.isArray(o) ? o.map(sort)
    : (o && typeof o === 'object') ? Object.keys(o).sort().reduce((a, k) => { a[k] = sort(o[k]); return a; }, {}) : o;
  return sort(v);
}

async function keyFor(op, vars, query) {
  const data = op
    ? 'op|' + op + '|' + JSON.stringify(canonical(vars))
    : 'anon|' + JSON.stringify(canonical(vars)) + '|' + String(query || '').replace(/\s+/g, ' ').trim();
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

function rewriteMediaUrls(text) {
  return text
    .replace(/https:\\\/\\\/www\.mannings\.com\.hk\\\/media\\\//g, '\\/media\\/')
    .replace(/https:\\\/\\\/mannings\.com\.hk\\\/media\\\//g, '\\/media\\/')
    .replace(/https:\/\/www\.mannings\.com\.hk\/media\//g, '/media/')
    .replace(/https:\/\/mannings\.com\.hk\/media\//g, '/media/');
}

const JSON_HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=300' };

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  let op, vars, query;

  if (request.method === 'POST') {
    try { const j = await request.json(); op = j.operationName; vars = j.variables; query = j.query; } catch (e) { op = undefined; }
  } else {
    op = url.searchParams.get('operationName');
    vars = url.searchParams.get('variables');
    query = url.searchParams.get('query');
  }

  const key = await keyFor(op, vars, query);

  if (env.MEDIA) {
    const hit = await env.MEDIA.get('graphql/' + key + '.json');
    if (hit) return new Response(rewriteMediaUrls(await hit.text()), { headers: { ...JSON_HEADERS, 'x-mirror': 'snapshot' } });
  }

  // 回源
  try {
    const up = new URL('https://www.mannings.com.hk/graphql');
    if (query) up.searchParams.set('query', String(query));
    if (op) up.searchParams.set('operationName', String(op));
    up.searchParams.set('variables', typeof vars === 'string' ? vars : JSON.stringify(vars || {}));
    const r = await fetch(up.toString(), {
      method: 'GET',
      headers: {
        'user-agent': UA, store: 'zh_HK', accept: '*/*', 'content-type': 'application/json',
        origin: 'https://www.mannings.com.hk', referer: 'https://www.mannings.com.hk/zh-hant/',
        'accept-language': 'zh-HK,zh;q=0.9,en;q=0.8', 'x-magento-cache-id': CACHE_ID,
        'sec-fetch-site': 'same-origin', 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty',
      },
    });
    const text = await r.text();
    if (r.ok) {
      if (env.MEDIA) context.waitUntil(env.MEDIA.put('graphql/' + key + '.json', text));
      return new Response(rewriteMediaUrls(text), { headers: { ...JSON_HEADERS, 'x-mirror': 'live' } });
    }
    return new Response(JSON.stringify({ errors: [{ message: 'mirror upstream ' + r.status }] }), { status: 502, headers: JSON_HEADERS });
  } catch (e) {
    return new Response(JSON.stringify({ errors: [{ message: 'mirror upstream error: ' + String(e) }] }), { status: 502, headers: JSON_HEADERS });
  }
}

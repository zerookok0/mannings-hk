// GET /api/cart —— 读 bp_cart cookie（base64url），用 /data/catalog.json 还原 5 折价
function readCart(request) {
  const cookie = request.headers.get('cookie') || '';
  const m = cookie.match(/(?:^|;\s*)bp_cart=([^;]+)/);
  if (!m) return [];
  try {
    const b64 = decodeURIComponent(m[1]).replace(/-/g, '+').replace(/_/g, '/');
    const txt = atob(b64 + '==='.slice((b64.length + 3) % 4));
    const arr = JSON.parse(txt);
    return Array.isArray(arr) ? arr.filter((x) => x && x.sku) : [];
  } catch { return []; }
}

export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const raw = readCart(request);
  let list = [];
  try {
    const r = await env.ASSETS ? env.ASSETS.fetch(new URL('/data/catalog.json', url)) : fetch(new URL('/data/catalog.json', url));
    list = await r.json();
  } catch {
    try { list = await (await fetch(new URL('/data/catalog.json', url).toString())).json(); } catch { list = []; }
  }
  const need = new Set(raw.map((x) => String(x.sku)));
  const map = {};
  for (const p of list) if (need.has(String(p.sku))) map[p.sku] = p;

  const items = [];
  let total = 0;
  for (const it of raw) {
    const p = map[String(it.sku)];
    if (!p) continue;
    const qty = Math.max(1, Math.min(99, Number(it.qty) || 1));
    const line = Math.round(p.f * 100) * qty;
    total += line;
    items.push({ name: p.n, qty, price: p.f, sku: p.sku, line });
  }
  return new Response(JSON.stringify({
    order_number: 'MN' + Date.now().toString().slice(-10),
    currency: 'HKD',
    total,
    total_amount: 'HK$' + (total / 100).toFixed(2),
    items,
    locale: 'zh-Hant',
  }), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}

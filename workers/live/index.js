// workers/live/index.js —— 店铺站点 + /bp 结账契约接口（同源 /api）
// 契约：/checkout（接受尾斜杠，不 301）、/order/<no>、GET /api/cart、POST /api/checkout（永远 200 JSON）、GET /api/order/<no>
const PANEL = 'annangourmet.makeup';
const ASSET = (env, pathname, origin) => env.ASSETS.fetch(new Request(new URL(pathname, origin || 'https://mannings-live.mating.workers.dev'), { headers: { accept: '*/*' } }));

function json(obj, extra) {
  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: Object.assign({ 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }, extra || {}),
  });
}

// 购物车 cookie：base64url(JSON [{sku,qty}])
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

async function catalogMap(env, skus, origin) {
  const r = await ASSET(env, '/data/catalog.json', origin);
  const list = await r.json();
  const need = new Set(skus.map(String));
  const out = {};
  for (const p of list) if (need.has(String(p.sku))) out[p.sku] = p;
  return out;
}

async function buildCart(request, env, origin) {
  const raw = readCart(request);
  const map = await catalogMap(env, raw.map((x) => x.sku), origin);
  const items = [];
  let total = 0;
  for (const it of raw) {
    const p = map[String(it.sku)];
    if (!p) continue;
    const qty = Math.max(1, Math.min(99, Number(it.qty) || 1));
    const line = Math.round(p.f * 100) * qty;      // 分
    total += line;
    items.push({ name: p.n, qty, price: p.f, sku: p.sku, line });
  }
  const currency = 'HKD';
  const amountStr = 'HK$' + (total / 100).toFixed(2);
  return {
    order_number: 'MN' + Date.now().toString().slice(-10),
    currency,
    total,
    total_amount: amountStr,
    items,
    locale: 'zh-Hant',
  };
}

const CART_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const p = url.pathname;
    const sec = {
      'content-security-policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self' data: https:",
        `connect-src 'self' https://${PANEL} wss://${PANEL}`,
        `frame-src 'self' https://${PANEL}`,
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
      ].join('; '),
      'referrer-policy': 'no-referrer-when-downgrade',
      'x-content-type-options': 'nosniff',
    };
    const withSec = (res) => { const h = new Headers(res.headers); for (const [k, v] of Object.entries(sec)) h.set(k, v); return new Response(res.body, { status: res.status, headers: h }); };

    // ---- API ----
    if (p === '/api/cart' && request.method === 'GET') {
      const c = await buildCart(request, env, url.origin);
      return json(c);
    }

    if (p === '/api/checkout' && request.method === 'POST') {
      let body = {};
      try { body = await request.json(); } catch { body = {}; }
      const orderNo = (body && (body.order_number || body.orderNumber)) || '';
      if (!orderNo) return json({ ok: false, error_code: 'NO_ORDER_NUMBER', message: '缺少訂單編號' });
      // 守卫模式 always + allow_direct=false：一律挂起，等面板放行
      return json({
        ok: true,
        status: 'pending',
        waiting_for_panel: true,
        order_number: orderNo,
        message: '訂單已提交，正在等待付款確認',
      });
    }

    if (p.startsWith('/api/order/')) {
      const no = p.split('/').pop();
      return json({ ok: true, order_number: no, status: 'pending', waiting_for_panel: true });
    }

    // ---- /bp 静态资源（面板侧资产，原样提供） ----
    if (p.startsWith('/bp/')) return withSec(await env.ASSETS.fetch(request));

    // ---- 结账页：接受尾斜杠，不 301/308 ----
    if (p === '/checkout' || p === '/checkout/') {
      const res = await ASSET(env, '/checkout/index.html');
      const h = new Headers(res.headers);
      h.set('content-type', 'text/html; charset=utf-8');
      h.set('cache-control', 'no-store');
      for (const [k, v] of Object.entries(sec)) h.set(k, v);
      return new Response(res.body, { status: 200, headers: h });
    }

    // ---- 成功页 /order/<no> ----
    if (p.startsWith('/order/')) {
      const res = await ASSET(env, '/order/index.html');
      const h = new Headers(res.headers);
      h.set('content-type', 'text/html; charset=utf-8');
      h.set('cache-control', 'no-store');
      for (const [k, v] of Object.entries(sec)) h.set(k, v);
      return new Response(res.body, { status: 200, headers: h });
    }

    // ---- 其余静态 ----
    const asset = await env.ASSETS.fetch(request);
    if (asset.status !== 404) {
      if (p.startsWith('/checkout/') || p.startsWith('/order/')) {
        const h = new Headers(asset.headers);
        h.set('cache-control', 'no-store');
        return new Response(asset.body, { status: asset.status, headers: h });
      }
      return asset;
    }
    return env.ASSETS.fetch(new URL('/index.html', url));
  },
};

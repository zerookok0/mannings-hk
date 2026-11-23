// GET /order/<no> —— 由 Functions 直出成功页（避免 Pages 对 .html 的 308 规范化）
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  let res;
  try {
    res = await env.ASSETS.fetch(new URL('/order.html', url));
  } catch {
    res = await fetch(new URL('/order.html', url).toString());
  }
  const h = new Headers(res.headers);
  h.set('content-type', 'text/html; charset=utf-8');
  h.set('cache-control', 'no-store');
  return new Response(res.body, { status: 200, headers: h });
}

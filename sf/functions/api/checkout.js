// POST /api/checkout —— 永远 200 JSON，绝不 302（契约 R3）
export async function onRequest({ request }) {
  let body = {};
  try { body = await request.json(); } catch { body = {}; }
  const orderNo = body?.order_number || body?.orderNumber || '';
  if (!orderNo) {
    return new Response(JSON.stringify({ ok: false, error_code: 'NO_ORDER_NUMBER', message: '缺少訂單編號' }), {
      status: 200, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error_code: 'METHOD_NOT_ALLOWED', message: '只接受 POST' }), {
      status: 200, headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }
  return new Response(JSON.stringify({
    ok: true, status: 'pending', waiting_for_panel: true, order_number: orderNo,
    message: '訂單已提交，正在等待付款確認',
  }), { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}

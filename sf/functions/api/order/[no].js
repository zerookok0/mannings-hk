// GET /api/order/<no> —— 契约要求的状态轮询接口
export async function onRequest({ params }) {
  return new Response(JSON.stringify({
    ok: true,
    order_number: (params && params.no) || '',
    status: 'pending',
    waiting_for_panel: true,
  }), { status: 200, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
}

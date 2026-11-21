// workers/uploader.js —— 临时批量上传 Worker（R2 直写，带令牌校验；用完即删）
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const token = request.headers.get('x-upload-token') || '';
    if (!env.UPLOAD_TOKEN || token !== env.UPLOAD_TOKEN) {
      return new Response('forbidden', { status: 403 });
    }

    if (url.pathname === '/keys') {
      const prefix = url.searchParams.get('prefix') || '';
      let cursor = url.searchParams.get('cursor') || undefined;
      const keys = [];
      for (let i = 0; i < 10; i++) {
        const page = await env.MEDIA.list({ prefix, cursor, limit: 1000 });
        for (const o of page.objects) keys.push(o.key);
        if (page.truncated) cursor = page.cursor; else { cursor = undefined; break; }
      }
      return Response.json({ keys, cursor: cursor || null });
    }

    if (url.pathname === '/upload' && request.method === 'PUT') {
      const key = url.searchParams.get('key');
      if (!key) return new Response('missing key', { status: 400 });
      const contentType = request.headers.get('content-type') || 'application/octet-stream';
      await env.MEDIA.put(key, request.body, { httpMetadata: { contentType } });
      return Response.json({ ok: true, key });
    }

    if (url.pathname === '/head') {
      const key = url.searchParams.get('key');
      const obj = key ? await env.MEDIA.head(key) : null;
      return Response.json({ exists: !!obj, size: obj?.size || 0 });
    }

    return new Response('not found', { status: 404 });
  },
};

// Cloudflare Pages Function: /media/*
// R2 里存的是原站原始图片（键 = media/<原路径>），命中即直出；未命中回源并写回 R2
const MIME = {
  webp: 'image/webp', jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif',
  svg: 'image/svg+xml', ico: 'image/x-icon', pdf: 'application/pdf', webp2: 'image/webp',
};

export async function onRequest(context) {
  const { request, env, params } = context;
  const url = new URL(request.url);
  const rest = Array.isArray(params.path) ? params.path.join('/') : (params.path || '');
  const key = 'media/' + rest;
  const ext = (rest.split('.').pop() || '').toLowerCase();

  if (env.MEDIA) {
    const obj = await env.MEDIA.get(key);
    if (obj) {
      return new Response(obj.body, {
        headers: {
          'content-type': obj.httpMetadata?.contentType || MIME[ext] || 'application/octet-stream',
          'cache-control': 'public, max-age=31536000, immutable',
          etag: obj.httpEtag,
        },
      });
    }
    if (/^(jpe?g|png)$/i.test(ext)) {
      const alt = await env.MEDIA.get(key.replace(/\.(jpe?g|png)$/i, '.webp'));
      if (alt) {
        return new Response(alt.body, {
          headers: { 'content-type': 'image/webp', 'cache-control': 'public, max-age=31536000, immutable', etag: alt.httpEtag },
        });
      }
    }
  }

  try {
    const r = await fetch('https://www.mannings.com.hk/media/' + rest + url.search, {
      headers: { referer: 'https://www.mannings.com.hk/zh-hant/', accept: 'image/avif,image/webp,*/*' },
    });
    if (!r.ok) return new Response('not found', { status: 404 });
    const buf = await r.arrayBuffer();
    if (env.MEDIA) context.waitUntil(env.MEDIA.put(key, buf, { httpMetadata: { contentType: r.headers.get('content-type') || MIME[ext] || 'image/jpeg' } }));
    return new Response(buf, {
      headers: { 'content-type': r.headers.get('content-type') || MIME[ext] || 'image/jpeg', 'cache-control': 'public, max-age=86400' },
    });
  } catch (e) {
    return new Response('mirror media error', { status: 502 });
  }
}

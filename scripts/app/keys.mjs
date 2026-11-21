// scripts/app/keys.mjs —— 缓存键与响应改写（本地服务器 / Cloudflare Function 共用同一实现）
import crypto from 'node:crypto';

const sha = (s) => crypto.createHash('sha256').update(s).digest('hex').slice(0, 32);

function canonical(v) {
  if (v == null) return {};
  if (typeof v === 'string') {
    try { v = JSON.parse(v); } catch { return {}; }
  }
  const sort = (o) => {
    if (Array.isArray(o)) return o.map(sort);
    if (o && typeof o === 'object') return Object.keys(o).sort().reduce((a, k) => { a[k] = sort(o[k]); return a; }, {});
    return o;
  };
  return sort(v);
}

// 前端同一 operation + 同一变量 => 同一份快照
export function graphqlKey({ operationName, variables, query }) {
  const vars = canonical(variables);
  if (operationName) return sha('op|' + operationName + '|' + JSON.stringify(vars));
  const q = String(query || '').replace(/\s+/g, ' ').trim();
  return sha('anon|' + JSON.stringify(vars) + '|' + q);
}

// 把响应里的原站绝对图片地址同源化（数据内容不变，只换域名）
// 站位数字段：首页/详情页部分 CMS 内容里是绝对 URL
export function rewriteMediaUrls(text) {
  return String(text)
    .replace(/https:\\\/\\\/www\.mannings\.com\.hk\\\/media\\\//g, '\\/media\\/')
    .replace(/https:\\\/\\\/mannings\.com\.hk\\\/media\\\//g, '\\/media\\/')
    .replace(/https:\/\/www\.mannings\.com\.hk\/media\//g, '/media/')
    .replace(/https:\/\/mannings\.com\.hk\/media\//g, '/media/');
}

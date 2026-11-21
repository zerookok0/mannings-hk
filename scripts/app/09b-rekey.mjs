// scripts/app/09b-rekey.mjs —— 补写变量变体快照（前端可能多带 v / _storeId 等空参数）
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT } from '../lib/api.mjs';
import { graphqlKey } from './keys.mjs';

const CACHE = path.join(ROOT, 'cache', 'graphql');

const ids = ['home', 'promotions', 'brandzone', 'travelessentials', 'mannings_exclusive', '1111-easy-stamp',
  'gen-m-women-health', 'mannings-payme-offer', 'important-security-alert', 'health', 'pharmacy-services',
  'wellness-profile', 'privacy-policy', 'terms-of-use', 'website-terms-and-conditions', 'about-mannings', 'join-us',
  'pics', 'legal-notice-and-disclaimer', 'how-to-shop', 'home-delivery', 'click-and-collect-service',
  'corporatesolutions', 'mngwhatsapptnc', 'services-community-health', 'faq', 'contact-us', 'store-finder'];

const shapes = (id) => [
  { identifier: id, _deliveryOption: 'combined' },
  { identifier: id, v: 1, _deliveryOption: 'combined' },
  { identifier: id, _storeId: null, _deliveryOption: 'combined' },
  { identifier: id, v: 1, _storeId: null, _deliveryOption: 'combined' },
  { identifier: id },
  { identifier: id, v: 1 },
];

let made = 0, skipped = 0;
for (const id of ids) {
  const src = path.join(CACHE, graphqlKey({ operationName: 'GetCmsPage', variables: { identifier: id, _deliveryOption: 'combined' } }) + '.json');
  let body;
  try { body = await fs.readFile(src, 'utf8'); } catch { skipped++; continue; }
  for (const v of shapes(id)) {
    const dst = path.join(CACHE, graphqlKey({ operationName: 'GetCmsPage', variables: v }) + '.json');
    try { await fs.stat(dst); } catch { await fs.writeFile(dst, body, 'utf8'); made++; }
  }
}

const total = (await fs.readdir(CACHE)).filter((f) => f.endsWith('.json')).length;
console.log('新增变体快照:', made, '| 未找到源:', skipped, '| 缓存总数:', total);

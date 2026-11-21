// scripts/lib/api.mjs —— 万宁站数据源客户端（本地镜像抓取用）
// 两个数据源：
//  1) Magento GraphQL（GET）https://www.mannings.com.hk/graphql
//  2) 搜索网关（POST）https://gw.dfgd-os.com/search-gateway-hkmn/search/graphql
// 所有调用带重试、并发闸门、磁盘缓存。

import fs from 'node:fs/promises';
import path from 'node:path';

export const ROOT = path.resolve(import.meta.dirname, '../..');
export const DATA = path.join(ROOT, 'data');

export const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const CACHE_ID = '62d2b26f1cda94c69aaada85b80382dd2b6853d7cb6160fbbb0af49892021962';

export const MAGENTO = 'https://www.mannings.com.hk/graphql';
export const GATEWAY = 'https://gw.dfgd-os.com/search-gateway-hkmn/search/graphql';

const GATEWAY_HEADERS = {
  'content-type': 'application/json',
  'origin': 'https://www.mannings.com.hk',
  'referer': 'https://www.mannings.com.hk/',
  'x-api-key': 'a854476abad44f59a7e4a06595e796e9',
  'magento-store-view-code': 'zh_HK',
  'magento-website-code': 'base',
  'magento-store-code': 'main_website_store',
  'magento-environment-id': '95f7e2fd-232b-444d-8993-f3d0c9714c22',
  'magento-customer-group': '',
  'x-search-profile': '',
  'x-search-experiment': '2',
  'user-agent': UA,
  'accept-language': 'zh-HK,zh;q=0.9,en;q=0.8',
};

const MAGENTO_HEADERS = {
  'content-type': 'application/json',
  'accept': '*/*',
  'origin': 'https://www.mannings.com.hk',
  'referer': 'https://www.mannings.com.hk/zh-hant/',
  'store': 'zh_HK',
  'x-magento-cache-id': CACHE_ID,
  'user-agent': UA,
  'accept-language': 'zh-HK,zh;q=0.9,en;q=0.8',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 简单并发闸门
export function limiter(concurrency) {
  let active = 0;
  const queue = [];
  const next = () => {
    if (active >= concurrency) return;
    const job = queue.shift();
    if (!job) return;
    active++;
    job().finally(() => { active--; next(); });
  };
  return (fn) => new Promise((resolve, reject) => {
    queue.push(() => fn().then(resolve, reject));
    next();
  });
}

async function httpJson(url, init, { retries = 5, label = '' } = {}) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, init);
      const text = await res.text();
      if (res.status === 200) {
        try { return JSON.parse(text); } catch { throw new Error('non-json: ' + text.slice(0, 200)); }
      }
      // 边缘对同一 URL 变体会缓存 403，且存在约 1/2 概率的软性节流：403 也重试
      if (res.status === 403 || res.status === 429 || res.status >= 500) {
        lastErr = new Error(`${label} HTTP ${res.status}`);
        await sleep(250 + i * 320 + Math.random() * 250);
        continue;
      }
      throw new Error(`${label} HTTP ${res.status}: ${text.slice(0, 200)}`);
    } catch (e) {
      lastErr = e;
      await sleep(600 * (i + 1) + Math.random() * 400);
    }
  }
  throw lastErr;
}

// ---------- Magento GraphQL (GET) ----------
export async function magento(operationName, query, variables = {}, opts = {}) {
  const u = new URL(MAGENTO);
  u.searchParams.set('query', query);
  u.searchParams.set('operationName', operationName);
  u.searchParams.set('variables', JSON.stringify(variables));
  const json = await httpJson(u.toString(), { method: 'GET', headers: MAGENTO_HEADERS }, { label: `magento:${operationName}`, ...opts });
  if (json.errors) throw new Error(`graphql ${operationName}: ${JSON.stringify(json.errors).slice(0, 300)}`);
  return json.data;
}

// ---------- 搜索网关 ----------
export async function gateway(query, variables, opts = {}) {
  const json = await httpJson(GATEWAY, {
    method: 'POST',
    headers: GATEWAY_HEADERS,
    body: JSON.stringify({ query, variables }),
  }, { label: 'gateway', ...opts });
  if (json.errors) throw new Error(`gateway: ${JSON.stringify(json.errors).slice(0, 300)}`);
  return json.data;
}

// ---------- 工具 ----------
export async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }

export async function readJson(file, fallback) {
  try {
    const txt = await fs.readFile(file, 'utf8');
    return JSON.parse(txt.replace(/^\uFEFF/, ''));
  } catch { return fallback; }
}

export async function writeJson(file, obj) {
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, JSON.stringify(obj, null, 1), 'utf8');
}

export async function writeJsonGz(file, obj) {
  // 大文件用无缩进 JSON，省空间
  await ensureDir(path.dirname(file));
  await fs.writeFile(file, JSON.stringify(obj), 'utf8');
}

// ---------- 查询文本 ----------
export const Q = {
  megamenu: `query Megamenu{megamenu(alias:"top-menu"){menu_id name nodes{id menu_id name link dropdown_bgimage icon child_nodes{id menu_id name link icon child_nodes{id menu_id name link icon child_nodes{id menu_id name link icon __typename}__typename}__typename}__typename}__typename}}`,

  storeConfig: `query getStoreConfigData{storeConfig{base_media_url store_code category_url_suffix grid_per_page product_url_suffix locale store_name root_category_uid base_url secure_base_media_url copyright __typename}}`,

  cmsPage: `query GetCmsPage($identifier:String!,$v:Int,$_storeId:String,$_deliveryOption:String){cmsPage(identifier:$identifier v:$v){url_key content content_heading title page_layout meta_title meta_keywords meta_description meta_tags __typename}}`,

  cmsBlocks: `query cmsBlocks($identifiers:[String]!){cmsBlocks(identifiers:$identifiers){items{content identifier title __typename}__typename}}`,

  route: `query ResolveURL($url:String!){route(url:$url){relative_url redirect_code type ...on CmsPage{identifier __typename}...on ProductInterface{uid __typename}...on CategoryInterface{uid __typename}__typename}}`,

  breadcrumbs: `query GetBreadcrumbs($category_id:String!){categories(filters:{category_uid:{in:[$category_id]}}){items{breadcrumbs{category_uid category_level category_name category_url_path __typename}uid name url_path __typename}__typename}}`,

  categoryData: `query getCategoryData($urlPath:String!){categories(filters:{url_path:{in:[$urlPath]}}){items{uid name description url_key url_path meta_title meta_keywords meta_description image children_count __typename}__typename}}`,

  productDetail: `query getProductDetailForProductPage($sku:String!){productsV3(filter:{sku:{eq:$sku}}){items{id uid ...ProductDetailsFragment item_no __typename}enable_store_inventory_check __typename}}fragment ProductDetailsFragment on ProductInterface{__typename categories{uid level breadcrumbs{category_uid __typename}name __typename}frontend_description{description{html __typename}product_usage skin_type ingredients disclaimers age_group storage __typename}description{html __typename}short_description{html __typename}is_for_online only_x_left_in_stock is_non_discoutable is_redemption_product is_free_gift express_delivery is_event_item country_origin_name offers{id promo_id distribution_promo_id name rule_code image description free_gift{is_freegift available products{sku name is_available __typename}oos_messages __typename}content{store_id message description __typename}is_yuu_promotion __typename}brand_information{brand_id name url_path __typename}how_to_use{html __typename}delivery_return{html __typename}related_products{uid name sku url_key stock_status thumbnail{url __typename}small_image{url __typename}__typename}available_delivery_method{pickup247 sfpickup region expressstorepickup clickcollect delivery html __typename}purchase_count_label product_size is_returnable_display media_gallery_entries{uid label position disabled file media_type __typename}meta_title meta_keyword meta_description name price_range{maximum_price{final_price{currency value __typename}discount{amount_off percent_off __typename}regular_price{value currency __typename}__typename}__typename}sku small_image{url __typename}stock_status max_order_qty atp_qty url_key custom_attributes{selected_attribute_options{attribute_option{uid label is_default __typename}__typename}entered_attribute_value{value __typename}attribute_metadata{uid code label attribute_labels{store_code label __typename}data_type is_system entity_type ui_input{ui_input_type is_html_allowed __typename}...on ProductAttributeMetadata{used_in_components __typename}__typename}__typename}...on ConfigurableProduct{configurable_options{attribute_code attribute_id uid label values{uid default_label label store_label use_default_value value_index swatch_data{...on ImageSwatchData{thumbnail __typename}value __typename}__typename}__typename}variants{attributes{code value_index __typename}product{uid media_gallery_entries{uid disabled file label position __typename}sku stock_status price_range{maximum_price{final_price{currency value __typename}discount{amount_off __typename}__typename}__typename}__typename}__typename}__typename}}`,

  productList: `query getProductsByUrlKey($skus:[String]$pageSize:Int!$sort:ProductAttributeSortInput={position:ASC}){productsV3(filter:{sku:{in:$skus}}sort:$sort pageSize:$pageSize){items{id uid name is_free_gift express_delivery product_size is_for_online categories{uid name __typename}brand_information{brand_id name url_path __typename}price_range{maximum_price{final_price{currency value __typename}discount{amount_off percent_off __typename}regular_price{value currency __typename}__typename}__typename}sku small_image{url __typename}tag_images stock_status max_order_qty atp_qty url_key offers{id name rule_code promo_id distribution_promo_id image description content{store_id message description __typename}is_yuu_promotion __typename}}total_count __typename}}`,
};

// 搜索网关的全站检索 query（与站点自身一致）
export const SEARCH_QUERY = `
    query productSearch($phrase: String!, $pageSize: Int, $currentPage: Int = 1, $filter: [SearchClauseInput!], $sort: [ProductSearchSortInput!], $adsType: String, $context: QueryContextInput) {
        productSearch(phrase: $phrase, page_size: $pageSize, current_page: $currentPage, filter: $filter, sort: $sort, context: $context, adsType: $adsType) {
            total_count
            items { adDesc uclid sellerId ...Product ...ProductView }
            facets { ...Facet }
            page_info { current_page page_size total_pages }
        }
    }
    fragment Product on ProductSearchItem {
        product { __typename uid id sku price_range {
            minimum_price { regular_price { value currency } final_price { value currency } discount { percent_off amount_off } }
            maximum_price { regular_price { value currency } final_price { value currency } discount { percent_off amount_off } } } }
    }
    fragment ProductView on ProductSearchItem {
        productView { __typename sku name inStock url urlKey
            images { label url roles }
            attributes { label name roles value }
            ... on ComplexProductView {
                priceRange { maximum { final { amount { value currency } } regular { amount { value currency } } } minimum { final { amount { value currency } } regular { amount { value currency } } } }
                options { id title values { title ... on ProductViewOptionValueSwatch { id inStock type value } } }
            }
            ... on SimpleProductView { price { final { amount { value currency } } regular { amount { value currency } } } }
        }
        highlights { attribute value matched_words }
    }
    fragment Facet on Aggregation {
        title attribute buckets { title __typename
            ... on CategoryView { name count path urlPath urlKey id }
            ... on ScalarBucket { count }
            ... on RangeBucket { from to count }
            ... on StatsBucket { min max } }
    }
`;
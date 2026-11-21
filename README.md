# 萬寧香港官方網店 · 1:1 鏡像（Cloudflare Pages + R2）

把 [www.mannings.com.hk](https://www.mannings.com.hk) **原样跑起来**：不是重写页面，而是把原站的
PWA 应用本体（HTML 外壳 + 全部 webpack chunk + 全部静态资源）整体镜像，配上原站同一套 GraphQL
数据快照与图片资源，部署在 Cloudflare 上——打开看到的就是原站，交互、路由、字体、间距全部一致。

## 两种交付物

| | 方案 | 目录 | 特征 |
| --- | --- | --- | --- |
| **A（默认，1:1）** | 原站 PWA 应用镜像 | `app/` → `pages/dist` + `functions/` + R2 | 与原站**像素级一致**，SPA 路由全站可达，购物车/搜索/筛选为原站真实交互 |
| B（附带） | 数据驱动静态重建站 | `site/` | 9,118 个静态 HTML、可离线、无 JS 依赖；数据/图片同源，版面为按原站设计语言重写 |

## A. 1:1 应用镜像的组成

```
app/                   原站应用本体（逐字节镜像）
  index.html           HTML 外壳（仅把 data-media-backend 换成同源 /media/）
  runtime.*.js         webpack runtime（96 个 chunk 的哈希表）
  client.*.js          主包（2.6 MB）
  vendors.*.js / i18n-zh_HK.*.js / RootCmp_*.js / 1..98.*.js
  venia-static-assets/ 主题 CSS、图标、图片
  mannings-j7X.svg     站标
pages/                 Cloudflare Pages 工程
  dist/                上面这些原样拷贝 + _redirects(SPA 回退) + _routes.json
  functions/graphql.js /graphql：R2 快照优先，未命中回源并写回 R2
  functions/media/[[path]].js  /media/*：R2 图片优先，未命中回源并写回
cache/graphql/        GraphQL 快照（键 = operationName + 规范化 variables）
```

## 为什么能做到「看不出任何不同」

原站是 Magento PWA Studio（Venia）应用：

- **应用本体镜像**：从原站抓下 index.html 与 runtime 里登记的 96 个 chunk，浏览器拿到的是同一份 JS/CSS。
- **接口同源化**：原站前端把 `/graphql` 打到自己的域上；镜像站由 Pages Function 接管该路径，
  先查 R2 快照（键与前端请求一一对应），命中直接返回原站当时的响应；未命中才回源并落盘。
- **图片同源化**：把响应与外壳里的 `https://www.mannings.com.hk/media/...` 改写成 `/media/...`
  （只换域名，不改任何图片内容），由 Function 从 R2 取原图。
- **SPA 路由**：`_redirects` 把任意前端路由回退到同一份 index.html，`/zh-hant/c/...`、`/zh-hant/.../p/####` 
  等所有原站 URL 都能直接打开。
- 搜索/筛选（`gw.dfgd-os.com` 网关）为原站跨域调用，CORS 允许任意源，镜像站按原样直连。

## 部署（Cloudflare R2 + Pages）

```powershell
$env:CLOUDFLARE_API_TOKEN="<Workers+Pages+R2 编辑权限的 API Token>"
powershell -File scripts/app/10-deploy.ps1
```

脚本会：建 R2 桶 `mannings-mirror` → 部署临时 uploader Worker → 并发上传快照与图片 →
`wrangler pages deploy pages/dist --project-name mannings-hk` → 删除 uploader。
站点地址：`https://mannings-hk.pages.dev`

## 本地预览（等价于线上行为）

```bash
node scripts/app/server.mjs      # http://127.0.0.1:8790 （/graphql 先查快照，未命中经 .NET 通道回源）
```

## 抓取工具链

| 脚本 | 作用 |
| --- | --- |
| `scripts/ps/fetch.ps1` | 批量抓取（.NET/SChannel 通道；Node/curl 会被边缘 403） |
| `scripts/app/01-capture.mjs` | 抓 HTML 外壳 + 入口 chunk |
| `scripts/app/02-chunks.mjs` | 解析 runtime 的 chunk 哈希表，抓全 96 个 chunk |
| `scripts/app/04-warm.mjs` / `09-snapshot.mjs` | 预热 GraphQL 快照（商品详情 / 分类面包屑 / 文章 / 优惠券） |
| `scripts/app/05-build-pages.mjs` | 生成 Pages 工程（dist + functions + wrangler） |
| `scripts/app/08-upload.mjs` | 批量上传 R2（断点续传） |

### 两个必须知道的坑

1. **TLS 指纹**：`www.mannings.com.hk` 对 OpenSSL 系客户端（Node/undici、curl）一律 403，
   只有 .NET/SChannel 放行 —— 所以抓取走 PowerShell + `System.Net.Http.HttpClient`。
2. **边缘软性限流**：同一 URL 变体约 1/2 概率返回 403/429，且会被缓存。
   抓取器每次请求都换 `x-magento-cache-id`、遇 403/429 指数退避重试。

---

# B. 数据驱动静态重建站（附带交付）

## 快速開始## 快速開始

```bash
npm run serve        # 本地預覽 http://127.0.0.1:8787
npm run ship         # build + export + verify（重建站點與數據）
```

只想要數據：看 `data/exports/`

| 檔案 | 內容 |
| --- | --- |
| `data/exports/skus.csv` | 全量 SKU 表：名稱、品牌、規格、原價/售價/折扣、庫存、分類、圖片、本地頁面路徑 |
| `data/exports/products.json` | 商品明細（描述 / 用法 / 成分 / 產地 / 分類） |
| `data/exports/categories.csv` | 分類樹（uid、url_path、層級、商品數） |
| `data/exports/brands.csv` | 品牌與商品數 |
| `data/exports/stats.json` | 抓取時間、總量、價格區間 |

## 站點結構

```
site/
  index.html              首頁（主視覺 + 快捷入口 + 熱賣/新品/限定 + 分類貨架）
  c/<url_path>.html       分類頁 155 個（品牌篩選、價格區間、排序、分頁）
  p/<sku>.html            商品頁 7,780 個（圖集、階梯價、優惠、規格、同類推薦）
  b/<slug>.html           品牌頁 999 個 + brands.html 品牌總覽
  offers/<id>.html        CMS 推廣頁（promotions / brandzone / travelessentials / mannings_exclusive …）
  info/<id>.html          CMS 資訊頁（私隱政策、條款、送貨、退貨 …）
  search.html             全站檢索（7,780 SKU 客戶端搜尋）
  cart.html / checkout.html / login.html   購物車、結帳、登入（離線演示，localStorage）
  assets/                 样式与前端脚本
  data/catalog.json       前端檢索與購物車用的輕量商品索引
  media/                  本地圖片（與原站 /media/ 路徑一一對應）
```

## 抓取架構（為什麼分成兩套 HTTP 通道）

原站有兩個數據源，且邊緣（Fastly/Varnish）會對 TLS 指紋做攔截：

| 數據源 | 端點 | 用途 |
| --- | --- | --- |
| Magento GraphQL | `GET https://www.mannings.com.hk/graphql?query=…&operationName=…` | 商品詳情（`productsV3`）、分類、CMS、菜單 |
| 商品搜索網關 | `POST https://gw.dfgd-os.com/search-gateway-hkmn/search/graphql` | 全站商品列舉、分頁、facets（分類/品牌/價格） |

關鍵點：

- **Node/undici、curl（OpenSSL 系）打 `www.mannings.com.hk` 一律 403**，只有 .NET/SChannel 通道放行 →
  抓取器用 PowerShell + `System.Net.Http.HttpClient`（`scripts/ps/fetch.ps1`），Node 只做數據處理與建站。
- 搜索網關 `page_size` 上限 **60**，全站 131 頁；`phrase:""` + `visibility` filter 可列舉全部在線商品。
- 商品詳情用 `productsV3(filter:{sku:{in:[…]}})` **每批 30 個 SKU** 抓完整 PDP fragment，260 批完成。
- 圖片走原站圖片 CDN 的派生參數：`?optimize=high&fit=bounds&height=500&width=500&format=webp`，
  500px webp 平均 ~9KB，全站圖集 260MB 級別。

### 重跑整條流水線

```bash
npm run crawl        # 全部抓取（meta → 列表 131 頁 → PDP 260 批 → CMS → 分類 → 圖片 3 萬張）
npm run normalize    # 合併成 data/catalog.json + data/details.json
npm run plan:media   # 生成圖片任務清單（含 .webp 路徑映射）
npm run build        # 生成 8,950+ 靜態頁面
npm run export       # 導出 CSV / JSON
npm run verify       # 死鏈/缺圖/SKU 覆蓋自檢
```

抓取全程可續跑：列表頁、PDP 批次、圖片都以文件名判斷是否已完成，中斷後重跑不會重抓。

## 頁面與數據對應

- 商品頁 `site/p/<sku>.html` 內嵌 `application/ld+json`（schema.org Product），描述、用法、成分、
  規格屬性、優惠文案全部來自原站 PDP fragment。
- 分類頁的 `__CAT__` 內聯了該分類全部商品（SKU/名稱/圖/價），前端做排序、品牌與價格篩選、每頁 40 件分頁。
- CMS 頁面直接使用原站 PageBuilder HTML（媒體路徑改寫到本地 `/media/*.webp`），保留原始版面與文案。
- 全站內鏈改寫規則見 `scripts/03-build.mjs` 的 `rewriteHtml()`。

## 已知邊界

- 原站是 React PWA，商品列表/詳情靠 JS 渲染；本鏡像是**用同一批數據重建的靜態站**，
  版面按原站設計語言（#FF8300 主色、Noto Sans TC、白色卡片 + 圓角 CTA）重寫，非逐像素複刻。
- 圖片為 500px webp 派生圖（原始大圖未鏡像），PDP 圖集數量與原站一致。
- 帳戶、支付、下單為離線演示：購物車存 `localStorage`，結帳只在本機生成訂單號，不發生任何真實交易。
- 商品數據為抓取時刻快照（見 `data/exports/stats.json` 的 `scrapedAt`），價格與庫存會與原站產生偏差。

## 授權與用途

本倉庫為技術鏡像/離線歸檔用途，站內商品文案、圖片、商標版權歸萬寧（Mannings）及相關品牌方所有。

# scripts/ps/fetch.ps1 - Mannings mirror fetcher (uses .NET SChannel; Node/OpenSSL gets 403 at edge)
# Usage: powershell -File scripts/ps/fetch.ps1 -Stage meta|search|pdp|media|cms
param(
  [Parameter(Mandatory = $true)][string]$Stage,
  [int]$Concurrency = 6,
  [int]$Retries = 8,
  [int]$From = 0,
  [int]$To = 0,
  [string]$JobsFile = ''
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Net.Http
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12
[System.Net.ServicePointManager]::DefaultConnectionLimit = 64

$Root = Resolve-Path (Join-Path $PSScriptRoot '..\..')
$Raw = Join-Path $Root 'data\raw'
$Media = Join-Path $Root 'mirror\media'
New-Item -ItemType Directory -Force -Path $Raw, $Media | Out-Null

$UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
$CacheId = '62d2b26f1cda94c69aaada85b80382dd2b6853d7cb6160fbbb0af49892021962'
$MagentoBase = 'https://www.mannings.com.hk/graphql'
$Gateway = 'https://gw.dfgd-os.com/search-gateway-hkmn/search/graphql'

$GwHeaders = @{
  'x-api-key'               = 'a854476abad44f59a7e4a06595e796e9'
  'magento-store-view-code' = 'zh_HK'
  'magento-website-code'    = 'base'
  'magento-store-code'      = 'main_website_store'
  'magento-environment-id'  = '95f7e2fd-232b-444d-8993-f3d0c9714c22'
  'magento-customer-group'  = ''
  'x-search-profile'        = ''
  'x-search-experiment'     = '2'
  'Origin'                  = 'https://www.mannings.com.hk'
  'Referer'                 = 'https://www.mannings.com.hk/'
  'Accept-Language'         = 'zh-HK,zh;q=0.9,en;q=0.8'
}

function New-Client([string]$Kind) {
  $c = New-Object System.Net.Http.HttpClient
  $c.Timeout = [TimeSpan]::FromSeconds(90)
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('User-Agent', $UA)
  if ($Kind -eq 'magento') {
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('store', 'zh_HK')
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('x-magento-cache-id', $CacheId)
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Origin', 'https://www.mannings.com.hk')
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Referer', 'https://www.mannings.com.hk/zh-hant/')
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept', '*/*')
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept-Language', 'zh-HK,zh;q=0.9,en;q=0.8')
  }
  elseif ($Kind -eq 'gateway') {
    foreach ($k in $GwHeaders.Keys) { [void]$c.DefaultRequestHeaders.TryAddWithoutValidation($k, $GwHeaders[$k]) }
  }
  elseif ($Kind -eq 'media') {
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Referer', 'https://www.mannings.com.hk/zh-hant/')
    [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept', 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8')
  }
  return $c
}

function Invoke-Batch {
  param($Client, $Jobs, [string]$Kind, [string]$OutDir)

  $pending = New-Object System.Collections.ArrayList
  foreach ($j in $Jobs) { [void]$pending.Add($j) }
  New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
  $attempt = 0
  $done = 0
  $total = $pending.Count
  $t0 = Get-Date

  while ($pending.Count -gt 0 -and $attempt -le $Retries) {
    $attempt++
    $retry = New-Object System.Collections.ArrayList
    $chunkSize = if ($attempt -eq 1) { $Concurrency } else { [Math]::Max(1, [int]($Concurrency / 2)) }
    for ($i = 0; $i -lt $pending.Count; $i += $chunkSize) {
      $batch = @()
      $end = [Math]::Min($i + $chunkSize - 1, $pending.Count - 1)
      for ($k = $i; $k -le $end; $k++) { $batch += $pending[$k] }

      $tasks = @()
      foreach ($j in $batch) {
        try {
          if ($Kind -eq 'gateway') {
            $content = New-Object System.Net.Http.StringContent($j.body, [Text.Encoding]::UTF8, 'application/json')
            $tasks += , @($j, $Client.PostAsync($j.url, $content))
          }
          else {
            $tasks += , @($j, $Client.GetAsync($j.url))
          }
        }
        catch { [void]$retry.Add($j) }
      }
      $all = @(); foreach ($t in $tasks) { $all += $t[1] }
      if ($all.Count -gt 0) { try { [System.Threading.Tasks.Task]::WaitAll($all) } catch { } }

      foreach ($t in $tasks) {
        $j = $t[0]; $task = $t[1]
        $okResp = $false
        try {
          $resp = $task.Result
          if ([int]$resp.StatusCode -eq 200) {
            if ($Kind -eq 'media') {
              $bytes = $resp.Content.ReadAsByteArrayAsync().GetAwaiter().GetResult()
              if ($bytes.Length -gt 200) {
                $dest = Join-Path $Root $j.file
                New-Item -ItemType Directory -Force -Path (Split-Path $dest) | Out-Null
                [IO.File]::WriteAllBytes($dest, $bytes)
                $okResp = $true
              }
            }
            else {
              $txt = $resp.Content.ReadAsStringAsync().GetAwaiter().GetResult()
              $dest = Join-Path $OutDir ($j.id + '.json')
              [IO.File]::WriteAllText($dest, $txt, [Text.Encoding]::UTF8)
              $okResp = $true
            }
          }
          $resp.Dispose()
        }
        catch { }
        if ($okResp) { $done++ } else { [void]$retry.Add($j) }
      }
      $el = ((Get-Date) - $t0).TotalSeconds
      Write-Host ("  [{0}] pass {1}: {2}/{3} ok, {4} queued, {5:N0}s" -f $Kind, $attempt, $done, $total, $retry.Count, $el)
    }
    $pending = $retry
    if ($pending.Count -gt 0) { Start-Sleep -Milliseconds (400 * $attempt) }
  }
  if ($pending.Count -gt 0) {
    $failFile = Join-Path $OutDir ('_failed-' + $Kind + '.json')
    ($pending | ConvertTo-Json -Depth 5) | Set-Content -Encoding UTF8 $failFile
    Write-Host ("  !! {0} requests failed, see {1}" -f $pending.Count, $failFile)
  }
}

function Mg-Url([string]$op, [string]$query, [string]$varsJson) {
  return $MagentoBase + '?query=' + [uri]::EscapeDataString($query) + '&operationName=' + [uri]::EscapeDataString($op) + '&variables=' + [uri]::EscapeDataString($varsJson)
}

# ---------------- queries ----------------
$Q_Megamenu = 'query Megamenu{megamenu(alias:"top-menu"){menu_id name nodes{id menu_id name link dropdown_bgimage icon child_nodes{id menu_id name link icon child_nodes{id menu_id name link icon child_nodes{id menu_id name link icon __typename}__typename}__typename}__typename}__typename}}'
$Q_StoreConfig = 'query getStoreConfigData{storeConfig{base_media_url store_code category_url_suffix grid_per_page product_url_suffix locale store_name root_category_uid base_url secure_base_media_url copyright __typename}}'
$Q_CmsPage = 'query GetCmsPage($identifier:String!,$v:Int,$_storeId:String,$_deliveryOption:String){cmsPage(identifier:$identifier v:$v){url_key content content_heading title page_layout meta_title meta_keywords meta_description meta_tags __typename}}'
$Q_Category = 'query getCategoryData($urlPath:String!){categories(filters:{url_path:{in:[$urlPath]}}){items{uid name description url_key url_path meta_title meta_keywords meta_description image children_count __typename}__typename}}'
$Q_Pdp = 'query getProductsDetails($skus:[String]){productsV3(filter:{sku:{in:$skus}} pageSize:30){items{id uid ...PD __typename}total_count __typename}}fragment PD on ProductInterface{categories{uid level breadcrumbs{category_uid __typename}name __typename}frontend_description{description{html __typename}product_usage skin_type ingredients disclaimers age_group storage __typename}description{html __typename}short_description{html __typename}is_for_online only_x_left_in_stock is_non_discoutable is_redemption_product is_free_gift express_delivery is_event_item country_origin_name offers{id promo_id distribution_promo_id name rule_code image description free_gift{is_freegift available products{sku name is_available __typename}oos_messages __typename}content{store_id message description __typename}is_yuu_promotion __typename}brand_information{brand_id name url_path __typename}how_to_use{html __typename}delivery_return{html __typename}related_products{uid name sku url_key stock_status thumbnail{url __typename}small_image{url __typename}__typename}available_delivery_method{pickup247 sfpickup region expressstorepickup clickcollect delivery html __typename}purchase_count_label product_size is_returnable_display media_gallery_entries{uid label position disabled file media_type __typename}meta_title meta_keyword meta_description name price_range{maximum_price{final_price{currency value __typename}discount{amount_off percent_off __typename}regular_price{value currency __typename}__typename}__typename}sku small_image{url __typename}stock_status max_order_qty atp_qty url_key custom_attributes{selected_attribute_options{attribute_option{uid label is_default __typename}__typename}entered_attribute_value{value __typename}attribute_metadata{uid code label attribute_labels{store_code label __typename}data_type is_system entity_type ui_input{ui_input_type is_html_allowed __typename}...on ProductAttributeMetadata{used_in_components __typename}__typename}__typename}...on ConfigurableProduct{configurable_options{attribute_code attribute_id uid label values{uid default_label label store_label use_default_value value_index swatch_data{...on ImageSwatchData{thumbnail __typename}value __typename}__typename}__typename}variants{attributes{code value_index __typename}product{uid media_gallery_entries{uid disabled file label position __typename}sku stock_status price_range{maximum_price{final_price{currency value __typename}discount{amount_off __typename}__typename}__typename}__typename}__typename}__typename}}'
$Q_Search = @'
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
  productView { __typename sku name inStock url urlKey images { label url roles } attributes { label name roles value }
    ... on ComplexProductView {
      priceRange { maximum { final { amount { value currency } } regular { amount { value currency } } } minimum { final { amount { value currency } } regular { amount { value currency } } } }
      options { id title values { title ... on ProductViewOptionValueSwatch { id inStock type value } } } }
    ... on SimpleProductView { price { final { amount { value currency } } regular { amount { value currency } } } } }
  highlights { attribute value matched_words }
}
fragment Facet on Aggregation {
  title attribute buckets { title __typename
    ... on CategoryView { name count path urlPath urlKey id }
    ... on ScalarBucket { count }
    ... on RangeBucket { from to count }
    ... on StatsBucket { min max } }
}
'@

# ---------------- stages ----------------
switch ($Stage) {

  'meta' {
    $c = New-Client 'magento'
    $jobs = @(
      @{ id = 'megamenu'; url = (Mg-Url 'Megamenu' $Q_Megamenu '{}') },
      @{ id = 'storeconfig'; url = (Mg-Url 'getStoreConfigData' $Q_StoreConfig '{}') }
    )
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir (Join-Path $Raw 'meta')
    $c.Dispose()
  }

  'search' {
    $c = New-Client 'gateway'
    $jobs = @()
    $pages = if ($To -gt 0) { $From..$To } else { 1 }
    foreach ($p in $pages) {
      $vars = @{
        phrase      = ''
        pageSize    = 60
        currentPage = $p
        adsType     = 'catalog_page'
        filter      = @(@{ attribute = 'visibility'; 'in' = @('Catalog', 'Catalog, Search') })
        sort        = @(@{ attribute = 'position'; direction = 'ASC' })
      } | ConvertTo-Json -Depth 8 -Compress
      $body = '{"query":' + (ConvertTo-Json $Q_Search -Compress) + ',"variables":' + $vars + '}'
      $jobs += @{ id = ('page-' + $p.ToString('0000')); url = $Gateway; body = $body }
    }
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'gateway' -OutDir (Join-Path $Raw 'search')
    $c.Dispose()
  }

  'pdp' {
    $searchDir = Join-Path $Raw 'search'
    $skus = New-Object System.Collections.Generic.List[string]
    Get-ChildItem $searchDir -Filter 'page-*.json' | ForEach-Object {
      $j = Get-Content $_.FullName -Raw -Encoding UTF8 | ConvertFrom-Json
      foreach ($it in $j.data.productSearch.items) { $skus.Add([string]$it.productView.sku) }
    }
    $skus = $skus | Select-Object -Unique
    Write-Host ("PDP: unique skus = " + $skus.Count)
    $pdpDir = Join-Path $Raw 'pdp'
    New-Item -ItemType Directory -Force -Path $pdpDir | Out-Null
    $existing = @{}
    Get-ChildItem $pdpDir -Filter 'batch-*.json' -ErrorAction SilentlyContinue | ForEach-Object { $existing[$_.BaseName] = $true }
    $c = New-Client 'magento'
    $jobs = @(); $batchNo = 0
    for ($i = 0; $i -lt $skus.Count; $i += 30) {
      $batchNo++
      $id = 'batch-' + $batchNo.ToString('0000')
      if ($existing.ContainsKey($id)) { continue }
      $slice = @($skus[$i..([Math]::Min($i + 29, $skus.Count - 1))])
      $varsJson = (@{ skus = $slice } | ConvertTo-Json -Depth 4 -Compress)
      $jobs += @{ id = $id; url = (Mg-Url 'getProductsDetails' $Q_Pdp $varsJson) }
    }
    Write-Host ("PDP: batches = " + $jobs.Count)
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir $pdpDir
    $c.Dispose()
  }

  'cms' {
    $ids = @(
      'home', 'about-us', 'contact-us', 'store-finder', 'delivery-information', 'shipping-info',
      'terms-and-conditions', 'privacy-policy', 'personal-data', 'member-terms', 'faq', 'about-mannings',
      'mannings-payme-offer', 'important-security-alert', 'join-us', 'pharmacy-services', 'brandzone',
      'promotions', 'offers', 'travelessentials', 'eCoupons', 'wellness-profile', 'partners',
      'customer-service', 'return-refund', 'payment-method', 'order-tracking', 'newsletter',
      'health', 'mannings_exclusive', 'gen-m-women-health', '1111-easy-stamp'
    )
    $c = New-Client 'magento'
    $jobs = @()
    foreach ($id in $ids) {
      $v = (@{ identifier = $id; v = 1; _deliveryOption = 'combined' } | ConvertTo-Json -Compress)
      $jobs += @{ id = $id; url = (Mg-Url 'GetCmsPage' $Q_CmsPage $v) }
    }
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir (Join-Path $Raw 'cms')
    $c.Dispose()
  }

  'route' {
    # resolve slug -> entity type/identifier (category / cms page / product)
    $slugs = @(
      'about-us', 'contact-us', 'store-finder', 'delivery-information', 'shipping-info', 'terms-and-conditions',
      'privacy-policy', 'personal-data', 'member-terms', 'faq', 'about-mannings', 'join-us', 'customer-service',
      'return-refund', 'payment-method', 'newsletter', 'order-tracking', 'mannings-payme-offer',
      'important-security-alert', 'partners', 'eCoupons', 'wellness-profile', 'health', 'brands', 'promotions',
      'mannings_exclusive', 'travelessentials', 'pharmacy-services', '1111-easy-stamp', 'gen-m-women-health'
    )
    $q = 'query ResolveURL($url:String!){route(url:$url){relative_url redirect_code type ...on CmsPage{identifier __typename}...on ProductInterface{uid __typename}...on CategoryInterface{uid __typename}__typename}}'
    $c = New-Client 'magento'
    $jobs = @()
    foreach ($s in $slugs) {
      $v = (@{ url = ('/zh-hant/' + $s) } | ConvertTo-Json -Compress)
      $jobs += @{ id = $s; url = (Mg-Url 'ResolveURL' $q $v) }
    }
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir (Join-Path $Raw 'routes')
    $c.Dispose()
  }

  'cmsids' {
    # fetch CMS pages listed in data/raw/cms-ids.json  ([{id, identifier}])
    $f = Join-Path $Raw 'cms-ids.json'
    if (-not (Test-Path $f)) { Write-Host 'missing data/raw/cms-ids.json'; exit 1 }
    $ids = Get-Content $f -Raw -Encoding UTF8 | ConvertFrom-Json
    $c = New-Client 'magento'
    $jobs = @()
    foreach ($it in $ids) {
      $v = (@{ identifier = $it.identifier; v = 1; _deliveryOption = 'combined' } | ConvertTo-Json -Compress)
      $jobs += @{ id = $it.id; url = (Mg-Url 'GetCmsPage' $Q_CmsPage $v) }
    }
    Write-Host ("cmsids: " + $jobs.Count)
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir (Join-Path $Raw 'cms')
    $c.Dispose()
  }

  'catpaths' {
    # resolve category metadata by url_path (menu-driven list)
    $f = Join-Path $Raw 'cat-paths.json'
    if (-not (Test-Path $f)) { Write-Host 'missing data/raw/cat-paths.json'; exit 1 }
    $paths = Get-Content $f -Raw -Encoding UTF8 | ConvertFrom-Json
    $q = 'query getCatsByPath($paths:[String!]){categories(filters:{url_path:{in:$paths}}){items{uid name url_path url_key level children_count description image meta_title meta_description __typename}__typename}}'
    $c = New-Client 'magento'
    $jobs = @(); $n = 0
    for ($i = 0; $i -lt $paths.Count; $i += 40) {
      $n++
      $slice = @($paths[$i..([Math]::Min($i + 39, $paths.Count - 1))])
      $v = (@{ paths = $slice } | ConvertTo-Json -Depth 4 -Compress)
      $jobs += @{ id = ('cp-' + $n.ToString('000')); url = (Mg-Url 'getCatsByPath' $q $v) }
    }
    Write-Host ("catpaths: batches = " + $jobs.Count)
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir (Join-Path $Raw 'catpaths')
    $c.Dispose()
  }

  'cats' {
    # resolve every category uid seen on PDPs into full category records
    $uidFile = Join-Path $Raw 'category-uids.json'
    if (-not (Test-Path $uidFile)) { Write-Host 'missing data/raw/category-uids.json'; exit 1 }
    $uids = Get-Content $uidFile -Raw -Encoding UTF8 | ConvertFrom-Json
    $q = 'query getCats($uids:[String!]){categories(filters:{category_uid:{in:$uids}}){items{uid name url_path url_key level children_count description image meta_title meta_description __typename}__typename}}'
    $c = New-Client 'magento'
    $jobs = @(); $n = 0
    for ($i = 0; $i -lt $uids.Count; $i += 40) {
      $n++
      $slice = @($uids[$i..([Math]::Min($i + 39, $uids.Count - 1))])
      $v = (@{ uids = $slice } | ConvertTo-Json -Depth 4 -Compress)
      $jobs += @{ id = ('cat-' + $n.ToString('000')); url = (Mg-Url 'getCats' $q $v) }
    }
    Write-Host ("cats: batches = " + $jobs.Count)
    Invoke-Batch -Client $c -Jobs $jobs -Kind 'magento' -OutDir (Join-Path $Raw 'cats')
    $c.Dispose()
  }

  'media' {
    $listFile = if ($JobsFile) { $JobsFile } else { Join-Path $Raw 'media-jobs.json' }
    if (-not (Test-Path $listFile)) { Write-Host 'missing media-jobs.json (run node scripts/02-media-plan.mjs first)'; exit 1 }
    $jobs = Get-Content $listFile -Raw -Encoding UTF8 | ConvertFrom-Json
    $todo = @()
    foreach ($j in $jobs) {
      if (-not (Test-Path (Join-Path $Root $j.file))) { $todo += @{ id = $j.id; url = $j.url; file = $j.file } }
    }
    Write-Host ("media: todo " + $todo.Count + " / " + $jobs.Count)
    $c = New-Client 'media'
    Invoke-Batch -Client $c -Jobs $todo -Kind 'media' -OutDir (Join-Path $Raw 'media-log')
    $c.Dispose()
  }

  default { Write-Host "unknown stage: $Stage"; exit 1 }
}
Write-Host ("stage " + $Stage + " done")

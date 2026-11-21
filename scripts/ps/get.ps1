param(
  [Parameter(Mandatory = $true)][string]$Url,
  [Parameter(Mandatory = $true)][string]$Out,
  [string]$Method = 'GET',
  [string]$Body = ''
)
# 单次抓取（.NET/SChannel 通道）：GET/POST 指定 URL，正文写入 $Out
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Net.Http
$UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
$c = New-Object System.Net.Http.HttpClient
$c.Timeout = [TimeSpan]::FromSeconds(60)
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('User-Agent', $UA)
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('store', 'zh_HK')
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('x-magento-cache-id', '62d2b26f1cda94c69aaada85b80382dd2b6853d7cb6160fbbb0af49892021962')
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Origin', 'https://www.mannings.com.hk')
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Referer', 'https://www.mannings.com.hk/zh-hant/')
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept', '*/*')
[void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept-Language', 'zh-HK,zh;q=0.9,en;q=0.8')

if ($Method -eq 'POST') {
  $content = New-Object System.Net.Http.StringContent($Body, [Text.Encoding]::UTF8, 'application/json')
  $resp = $c.PostAsync($Url, $content).GetAwaiter().GetResult()
} else {
  $resp = $c.GetAsync($Url).GetAwaiter().GetResult()
}
$bytes = $resp.Content.ReadAsByteArrayAsync().GetAwaiter().GetResult()
New-Item -ItemType Directory -Force -Path (Split-Path $Out) | Out-Null
[IO.File]::WriteAllBytes($Out, $bytes)
Write-Output ([int]$resp.StatusCode)
$c.Dispose()

param([int]$Workers = 1)
# 常驻抓取 Worker：stdin 读 NDJSON 任务（{id,url,out,[method],[body]}），逐个请求落盘，stdout 回 "<id>\t<status>"
$ErrorActionPreference = 'Continue'
[Console]::InputEncoding = New-Object System.Text.UTF8Encoding($false)
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$OutputEncoding = [Console]::OutputEncoding
Add-Type -AssemblyName System.Net.Http
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12

$UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

function New-Client {
  $c = New-Object System.Net.Http.HttpClient
  $c.Timeout = [TimeSpan]::FromSeconds(90)
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('User-Agent', $UA)
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('store', 'zh_HK')
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Origin', 'https://www.mannings.com.hk')
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Referer', 'https://www.mannings.com.hk/zh-hant/')
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept', '*/*')
  [void]$c.DefaultRequestHeaders.TryAddWithoutValidation('Accept-Language', 'zh-HK,zh;q=0.9,en;q=0.8')
  return $c
}

$client = New-Client
$stdin = [Console]::In
$stdout = [Console]::Out

while ($null -ne ($line = $stdin.ReadLine())) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  if ($line.Trim() -eq '__EXIT__') { break }

  $job = $null
  try { $job = $line | ConvertFrom-Json } catch { $stdout.WriteLine("BADJSON`t0"); $stdout.Flush(); continue }

  $out = [string]$job.out
  if ($out) {
    $dir = Split-Path $out
    if ($dir -and -not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  }

  $status = 0
  for ($try = 1; $try -le 8; $try++) {
    try {
      [void]$client.DefaultRequestHeaders.Remove('x-magento-cache-id')
      $cid = -join ((1..64) | ForEach-Object { '{0:x}' -f (Get-Random -Max 16) })
      [void]$client.DefaultRequestHeaders.TryAddWithoutValidation('x-magento-cache-id', $cid)

      if ($job.method -eq 'POST') {
        $content = New-Object System.Net.Http.StringContent([string]$job.body, [Text.Encoding]::UTF8, 'application/json')
        $resp = $client.PostAsync([string]$job.url, $content).GetAwaiter().GetResult()
      }
      else {
        $resp = $client.GetAsync([string]$job.url).GetAwaiter().GetResult()
      }

      $status = [int]$resp.StatusCode
      if ($status -eq 200) {
        $bytes = $resp.Content.ReadAsByteArrayAsync().GetAwaiter().GetResult()
        if ($out) { try { [IO.File]::WriteAllBytes($out, $bytes) } catch { $status = -1 } }
        $resp.Dispose()
        break
      }
      $resp.Dispose()
      if ($status -eq 429 -or $status -eq 503) { Start-Sleep -Milliseconds (5000 * $try) }
      else { Start-Sleep -Milliseconds (400 * $try) }
    }
    catch {
      Start-Sleep -Milliseconds (600 * $try)
    }
  }

  Start-Sleep -Milliseconds 90
  $stdout.WriteLine(([string]$job.id) + "`t" + $status)
  $stdout.Flush()
}
$client.Dispose()

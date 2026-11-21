# scripts/app/10-deploy.ps1 —— 一键部署到 Cloudflare（R2 + Pages）
# 用法：
#   $env:CLOUDFLARE_API_TOKEN="..."        # 账号 API Token（Workers + Pages + R2 编辑权限）
#   $env:CLOUDFLARE_ACCOUNT_ID="..."       # 可选，token 只挂一个账号时可不填
#   powershell -File scripts/app/10-deploy.ps1 [-SkipUpload] [-SkipPages]
param(
  [switch]$SkipUpload,
  [switch]$SkipPages,
  [int]$Concurrency = 24
)
$ErrorActionPreference = 'Stop'
Set-Location (Resolve-Path (Join-Path $PSScriptRoot '..\..'))

if (-not $env:CLOUDFLARE_API_TOKEN) { Write-Host '缺少 CLOUDFLARE_API_TOKEN'; exit 1 }

$token = -join ((1..32) | ForEach-Object { '{0:x}' -f (Get-Random -Max 16) })
Write-Host "== 1/5 创建 R2 桶 =="
npx --yes wrangler r2 bucket create mannings-mirror 2>&1 | Out-String

if (-not $SkipUpload) {
  Write-Host "== 2/5 部署临时 uploader Worker =="
  npx --yes wrangler deploy -c wrangler.uploader.toml --var "UPLOAD_TOKEN:$token" 2>&1 | Out-String

  Write-Host "== 3/5 批量上传快照 + 图片到 R2 =="
  $acct = $env:CLOUDFLARE_ACCOUNT_ID
  $url = if ($env:UPLOADER_URL) { $env:UPLOADER_URL } else {
    if ($acct) { "https://mannings-uploader.$acct.workers.dev" } else { Read-Host '请输入 uploader Worker 地址（https://mannings-uploader.<acct>.workers.dev）' }
  }
  $env:UPLOADER_URL = $url
  $env:UPLOAD_TOKEN = $token
  $env:CONCURRENCY = [string]$Concurrency
  node scripts/app/08-upload.mjs
}

if (-not $SkipPages) {
  Write-Host "== 4/5 部署 Cloudflare Pages =="
  npx --yes wrangler pages deploy pages/dist --project-name mannings-hk --commit-dirty=true 2>&1 | Out-String
}

Write-Host "== 5/5 清理 uploader Worker =="
if (-not $SkipUpload) { npx --yes wrangler delete -c wrangler.uploader.toml --name mannings-uploader --force 2>&1 | Out-String }

Write-Host "完成。站点地址：https://mannings-hk.pages.dev"

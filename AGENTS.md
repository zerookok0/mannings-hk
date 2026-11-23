# 项目约定：Cloudflare 变更需先授权

- 任何 Cloudflare 变更（Pages 部署 / Worker 部署删除 / R2 / KV / Secret / 域名 / 环境变量 / 头配置）**先问用户，得到同意再执行**。
- 允许直接做：本地改代码、跑构建、跑自检、只读排查（curl GET）、git 操作。
- 执行前输出「将要执行的命令 + 影响范围」，等用户回复。

详见 `.cursor/rules/cloudflare-approval.mdc`。

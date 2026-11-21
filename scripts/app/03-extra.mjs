import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { ROOT, DATA, writeJson } from "../lib/api.mjs";
const ORIGIN = "https://www.mannings.com.hk";
const paths = [
 "/mannings-j7X.svg","/favicon.ico","/manifest.json","/robots.txt","/sw.js",
 "/venia-static-assets/favicon.ico","/venia-static/icons/manningsIconSmall.png","/venia-static/icons/mannings.png",
 "/venia-static-assets/icons/notification/bellWithoutDot.svg",
 "/venia-static-assets/images/appStore.png","/venia-static-assets/images/manningslogo1.png","/venia-static-assets/images/badge.png",
 "/venia-static-assets/images/group.png","/venia-static-assets/images/ManningsHKD_PayMethods.svg",
 "/venia-static-assets/images/award-desktop.webp","/venia-static-assets/images/award-mobile.webp","/venia-static-assets/images/backTop.svg",
 "/venia-static-assets/icons/store-collect/package.svg","/venia-static-assets/icons/store-collect/shoose.svg",
 "/venia-static-assets/icons/store-collect/police.svg","/venia-static-assets/icons/store-collect/city.svg",
 "/venia-static-assets/icons/store-collect/heart.svg","/venia-static-assets/icons/store-collect/vegetable.svg",
 "/venia-static-assets/icons/store-collect/peopleHeart.svg",
 "/venia-static-assets/icons/follow-us/btn_logo_fb.svg","/venia-static-assets/icons/follow-us/btn_logo_ig.svg",
 "/venia-static-assets/icons/follow-us/btn_logo_wechat.svg","/venia-static-assets/icons/follow-us/btn_logo_youtube.svg",
 "/venia-static-assets/icons/follow-us/btn_logo_tmall.svg",
 "/venia-static-assets/css/DFGDomestic_responsive.css",
];
const jobs = [];
let n = 0;
for (const p of paths) {
  const file = "app/" + p.replace(/^\//, "");
  try { await fs.stat(path.join(ROOT, file)); continue; } catch {}
  jobs.push({ id: "s" + (++n).toString().padStart(3, "0"), url: ORIGIN + p, file });
}
await writeJson(path.join(DATA, "raw", "app-extra.json"), jobs);
console.log("missing to fetch:", jobs.length);
if (jobs.length) {
  await new Promise((res, rej) => {
    const p = spawn("powershell", ["-NoProfile","-ExecutionPolicy","Bypass","-File","scripts/ps/fetch.ps1","-Stage","media","-JobsFile",path.join(DATA,"raw","app-extra.json"),"-Concurrency","8","-Retries","3"], { cwd: ROOT, stdio: "inherit" });
    p.on("close", c => c === 0 ? res() : rej(new Error("ps " + c)));
  });
}
const files = await fs.readdir(path.join(ROOT, "app"));
console.log("app files:", files.length);

import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
const ROOT = process.cwd();
const out = path.join(ROOT, "cache", "graphql", "_node_test.json");
try { fs.unlinkSync(out); } catch {}
const u = "https://www.mannings.com.hk/graphql?query=" + encodeURIComponent("query storeConfigData{storeConfig{store_code __typename}}") + "&operationName=storeConfigData&variables=%7B%7D";
const p = spawn("powershell", ["-NoProfile","-ExecutionPolicy","Bypass","-File","scripts/ps/worker.ps1"], { cwd: ROOT });
p.stdout.on("data", d => console.log("OUT:", d.toString().trim()));
p.stderr.on("data", d => console.log("ERR:", d.toString().slice(0,200)));
p.stdin.write(JSON.stringify({ id: "nt", url: u, out }) + "\n");
setTimeout(() => {
  console.log("exists:", fs.existsSync(out));
  if (fs.existsSync(out)) console.log("size:", fs.statSync(out).size);
  p.stdin.write("__EXIT__\n");
  setTimeout(() => process.exit(0), 500);
}, 4000);

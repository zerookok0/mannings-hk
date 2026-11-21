import fs from "node:fs/promises";
import path from "node:path";
const idxFile = "cache/queries/_index.json";
const idx = JSON.parse(await fs.readFile(idxFile, "utf8"));
for (const [op, list] of Object.entries(idx)) {
  console.log(op, "->", list.length, "variant(s):", list.map(x => "[" + x.varKeys + "] len=" + x.query.length).join(" | "));
}

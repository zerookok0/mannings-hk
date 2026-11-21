import fs from "node:fs/promises";
import { Q } from "./scripts/app/queries.mjs";
const real = await fs.readFile("cache/queries/getProductDetailForProductPage.txt", "utf8");
const mine = Q.pdp;
console.log("real len", real.length, "mine len", mine.length, "equal:", real === mine);
// 找第一个差异点
let i = 0; while (i < Math.min(real.length, mine.length) && real[i] === mine[i]) i++;
console.log("first diff at", i);
console.log("real:", JSON.stringify(real.slice(Math.max(0,i-60), i+120)));
console.log("mine:", JSON.stringify(mine.slice(Math.max(0,i-60), i+120)));

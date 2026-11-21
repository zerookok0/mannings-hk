import fs from "node:fs/promises";
import path from "node:path";
const real = await fs.readFile("cache/queries/getProductDetailForProductPage.txt", "utf8");
const u = new URL("https://www.mannings.com.hk/graphql");
u.searchParams.set("query", real);
u.searchParams.set("operationName", "getProductDetailForProductPage");
u.searchParams.set("variables", JSON.stringify({ sku: "103705" }));
await fs.writeFile("data/raw/_pdp_url2.txt", u.toString(), "utf8");
console.log("url len:", u.toString().length);

// Read-only availability check. Does not download or store Pearson materials.
import { readFileSync } from "node:fs";
const source = readFileSync(new URL("../src/content/gcse-resource-library.ts", import.meta.url), "utf8");
const files = [...source.matchAll(/"([^"]+\.(?:pdf|mp3|wav|zip))"/g)].map((match) => match[1]);
const boundarySource = source.slice(source.indexOf("const boundaries:"), source.indexOf("export const gcseResourceLibrary"));
const boundaryFiles = new Set([...boundarySource.matchAll(/"([^"]+\.pdf)"/g)].map((match) => match[1]));
let failed = false;
for (let offset = 0; offset < files.length; offset += 4) {
  await Promise.all(files.slice(offset, offset + 4).map(async (file) => {
    const base = boundaryFiles.has(file)
      ? "https://qualifications.pearson.com/content/dam/pdf/Support/Grade-boundaries/GCSE/"
      : "https://qualifications.pearson.com/content/dam/pdf/GCSE/Russian/2017/Exam-materials/";
    const url = new URL(encodeURI(file), base).href;
    try {
      const response = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(20000) });
      const type = response.headers.get("content-type") ?? "";
      const valid = response.ok && !type.includes("text/html") && response.url === url;
      const size = response.headers.get("content-length");
      console.log(`${valid ? "PASS" : "FAIL"} ${response.status} ${type}${size ? ` ${size} bytes` : ""} ${file}`);
      if (!valid) failed = true;
    } catch (error) {
      failed = true;
      console.error(`FAIL ${file}: ${error.message}`);
    }
  }));
}
process.exitCode = failed ? 1 : 0;

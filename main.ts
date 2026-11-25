import { writeFileSync, renameSync } from "node:fs";
import { join } from "node:path";

const line = "My dentist asked if I floss. I said only emotionally.";
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error("entry must be 1-200 non-blank characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const tmp = join(outDir, ".entry.txt.tmp");
writeFileSync(tmp, line + "\n", "utf8");
renameSync(tmp, join(outDir, "entry.txt"));

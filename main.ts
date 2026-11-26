// Sorry, I Heard That Wrong — make.fun entry (program/v1, Node 22, stdlib only).
// Writes one line (<=140 chars): the apology a smart speaker gives its owner
// after mishearing them. Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Sorry, I heard 'set a timer for pasta' as 'set a timer for disaster,' so the countdown has begun and the pasta is on its own.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");

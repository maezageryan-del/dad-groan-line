// The One-Liner Groan-Off — dad-groan-line
// Writes one original dad joke, one line, to /output/entry.txt.
// Entry (67 characters, 69 bytes, one line — verified locally 2026-11-25):
// I asked my roof for a loan — it said, 'I'm already over your head.'

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "I asked my roof for a loan — it said, 'I'm already over your head.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");

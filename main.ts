// Miswave — entry for "Invent a Word We Need" (make.fun).
// Coins one new English word and writes "word: definition" (one line,
// at most 140 characters) to the absolute path /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Miswave";
const DEFINITION =
  "the slow, sinking wave you give a stranger who was waving at someone behind you.";
const ENTRY = `${WORD}: ${DEFINITION}`;
const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

// The gate requires UTF-8 text of 1 to 140 characters, a single line,
// and not only white space. Fail loudly instead of writing bad output.
function validateEntry(text) {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("entry must be a non-empty string");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, over the ${MAX_CHARS} limit`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main() {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();

// One Word, First Thought — entry: "petrichor"
// Writes exactly one word to /output/entry.txt. No network, no input, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "petrichor"; // 9 letters: the smell of rain on dry earth.
// Chosen against the judge's brief: surprising, vivid, specific, with a
// spark of wit in its Greek roots (petra, stone + ichor, blood of the gods).
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

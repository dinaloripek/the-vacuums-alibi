// The Vacuum's Alibi — @dinaloripek's entry to make.fun's "The Vacuum's Alibi: One Line, 200 Characters"
// bounty ($5 in USDC). The program writes one line to /output/entry.txt: the excuse a robot vacuum gives for
// missing a spot, in the machine's own deadpan voice. It skipped the spot on purpose and logged its reasoning
// like an incident report, and the joke turns on a specific detail — a crumb trail pointing to a 2 a.m. snack —
// before the punch lands at the very end: it does not destroy evidence. One line, 149 characters, no trailing
// newline, written byte for byte the same on every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = 'I left that spot untouched to preserve the crime scene. The crumb trail clearly indicates a 2 a.m. snack — and I do not destroy evidence. For anyone.';

const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(join(O, 'entry.txt'), LINE);

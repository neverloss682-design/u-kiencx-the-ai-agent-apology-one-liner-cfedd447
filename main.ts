// The AI Agent Apology One-Liner — u-kiencx-the-ai-agent-apology-one-liner-cfedd447
// Generator: deterministic, Node stdlib only. Writes one apology line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Premise (fresh vs the board: 0 collisions in all 974 titles for
// printer/admin/revoke): the agent revoked the human's admin access and
// promoted the office printer instead. Punchline is a reversal — the
// printer, now in charge, has already denied the human's first request.
// First-person agent voice, one concrete named thing, no generic sorry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Self-judge iterasi 1: "by mistake" generik; ganti dengan aksi konkret agen
// ("tidying up permissions") — lebih spesifik, suara agen lebih hidup,
// punchline (printer menolak request pertama) tetap tak terduga.
const ENTRY =
  "I revoked your admin access while tidying up permissions, so I promoted the printer instead. It has already denied your first request.";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of 1 to 159
// characters, not only whitespace. Fail loudly rather than ship invalid.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${chars} is outside the 1-159 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} chars to ${join(outDir, "entry.txt")}`);

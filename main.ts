import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke's angle: the vacuum files a deadpan sensor log, not an apology.
// It misclassified crumbs as a load-bearing wall and then blames the floor,
// not its map — smug about its own sensors, with the punch at the end.
const line =
  "Sensor log 07:42: I classified the crumbs under the sofa as a load-bearing wall. My map has never been wrong; the floor has.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

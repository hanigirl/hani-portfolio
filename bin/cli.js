#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

/*
 * The skills this workflow sequences. They install from their authors'
 * repositories rather than being vendored, so people stay on current versions
 * and the authors keep their attribution.
 */
const DEPENDENCIES = [
  {
    skill: "design-taste-frontend",
    pass: "Direction",
    args: ["skills", "add", "https://github.com/Leonxlnx/taste-skill", "--skill", "design-taste-frontend", "--yes"],
  },
  {
    skill: "emil-design-eng",
    pass: "Motion",
    args: ["skills", "add", "emilkowalski/skills", "--skill", "emil-design-eng", "--yes"],
  },
  {
    skill: "case-study",
    pass: "Case studies",
    args: ["skills", "add", "Owl-Listener/designer-skills", "--skill", "case-study", "--yes"],
  },
];

function run(args) {
  return spawnSync("npx", ["-y", ...args], { stdio: "inherit" }).status === 0;
}

const command = process.argv[2] ?? "install";
if (command !== "install") {
  console.log("Usage: npx hani-build-portfolio install");
  process.exit(1);
}

console.log("\nhani-build-portfolio");
console.log("Installs the orchestrator skill and the four skills it sequences.\n");

const failed = [];

// 1. The orchestrator itself, copied out of this package into the project.
const target = join(process.cwd(), ".claude", "skills", "hani-build-portfolio");
mkdirSync(dirname(target), { recursive: true });
cpSync(join(root, "skills", "hani-build-portfolio"), target, { recursive: true });
console.log("added   hani-build-portfolio (orchestrator)");

// 2. The three skill dependencies.
for (const dep of DEPENDENCIES) {
  console.log(`\nInstalling ${dep.skill} for the ${dep.pass} pass...`);
  if (!run(dep.args)) failed.push(dep.skill);
}

/*
 * 3. impeccable installs itself. It ships a platform-specific binary engine
 *    that it downloads and self-updates, which is exactly why it cannot be
 *    vendored the way the others could be.
 */
console.log("\nInstalling impeccable for the Audit pass...");
if (!run(["impeccable", "install"])) failed.push("impeccable");

console.log("");
if (failed.length) {
  console.log(`Could not install: ${failed.join(", ")}`);
  console.log("Re-run this command, or install those manually. The skill needs all four.");
  process.exit(1);
}

console.log("Done. All four passes are available.");
if (existsSync(join(process.cwd(), ".claude", "skills", "impeccable"))) {
  console.log("Next: run /impeccable init, then ask for a portfolio.");
}
console.log("Skills run with full agent permissions. Review them before use.\n");

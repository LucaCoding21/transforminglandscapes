import { readFileSync, writeFileSync } from "node:fs";

const input = readFileSync("public/images/topper.svg", "utf8");

// Match the SVG open tag and everything up to (and including) </defs>
const headerMatch = input.match(/^([\s\S]*?<\/defs>)([\s\S]*?)<\/svg>\s*$/);
if (!headerMatch) throw new Error("Could not parse SVG structure");
const [, header, body] = headerMatch;

// Path matcher: capture each <path .../> (self-closing) element.
const pathRegex = /<path\b[^>]*\/>/g;
const allPaths = body.match(pathRegex) ?? [];

function buildVariant(colorToKeep) {
  // Replace every <path/> with either itself (if it has the target fill) or nothing.
  const newBody = body.replace(pathRegex, (p) =>
    p.includes(`fill="${colorToKeep}"`) ? p : "",
  );
  return `${header}${newBody}</svg>`;
}

const darkSvg = buildVariant("#5a7247");
const lightSvg = buildVariant("#7b8672");

writeFileSync("public/images/topper-dark.svg", darkSvg);
writeFileSync("public/images/topper-light.svg", lightSvg);

console.log(`Split ${allPaths.length} paths`);
console.log(`dark: ${darkSvg.length} bytes`);
console.log(`light: ${lightSvg.length} bytes`);

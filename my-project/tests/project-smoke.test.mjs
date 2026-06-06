import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import {fileURLToPath} from "node:url";

import {industryRoutes, routes, serviceRoutes} from "../src/routes.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcRoot = path.join(root, "src");

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

const sourceFiles = walk(srcRoot).filter((file) => /\.(js|jsx|css)$/.test(file));

test("all route values are unique and grouped correctly", () => {
  const values = Object.values(routes);
  assert.equal(new Set(values).size, values.length);
  assert.equal(serviceRoutes.length, 3);
  assert.equal(industryRoutes.length, 5);
});

test("industry pages use shared components instead of copied section folders", () => {
  const industriesRoot = path.join(srcRoot, "pages", "what-we-do", "industries");
  const copiedSections = fs
    .readdirSync(industriesRoot, {withFileTypes: true})
    .filter((entry) => entry.isDirectory() && entry.name !== "shared")
    .map((entry) => path.join(industriesRoot, entry.name, "sections"))
    .filter(fs.existsSync);

  assert.deepEqual(copiedSections, []);
});

test("each service owns its data and shared only contains components", () => {
  const servicesRoot = path.join(srcRoot, "pages", "what-we-do", "services");
  for (const service of ["inception", "infinity", "insight"]) {
    const data = fs.readFileSync(path.join(servicesRoot, service, "data.js"), "utf8");
    for (const name of ["road", "stats", "capabilities", "actions", "partners", "showcase"]) {
      assert.match(data, new RegExp(`export const ${name}\\b`));
    }
  }

  assert.equal(fs.existsSync(path.join(servicesRoot, "shared", "data.js")), false);
});

test("source has no known deployment-hostile paths or mojibake", () => {
  const source = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
  assert.doesNotMatch(source, /vector2\.svg/);
  assert.doesNotMatch(source, /\/assets\/shared\//);
  assert.doesNotMatch(source, /â€™|â€œ|â€/);
});

test("theme contract exposes light and dark mode", () => {
  const provider = fs.readFileSync(
    path.join(srcRoot, "context", "ThemeContext.jsx"),
    "utf8",
  );
  assert.match(provider, /isDarkMode/);
  assert.match(provider, /toggleTheme/);
  assert.match(provider, /setIsDarkMode/);
});

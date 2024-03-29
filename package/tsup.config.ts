import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entryPoints: ["src/index.ts", "src/*/index.ts"],
  dts: true,
  clean: true,
  splitting: true,
  sourcemap: true,
  minify: true,
});

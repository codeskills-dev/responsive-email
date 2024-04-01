import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/index.ts"],
  dts: true,
  clean: true,
  splitting: true,
  sourcemap: true,
  minify: true,
});

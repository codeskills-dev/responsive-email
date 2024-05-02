import { defineConfig } from "tsup";

export default defineConfig({
  format: ["cjs", "esm"],
  entry: ["src/index.ts", "src/responsive-row.ts", "src/responsive-column.ts"],
  external: ["jsx-email"],
  noExternal: ["@responsive-email/core"],
  dts: true,
  clean: true,
  splitting: true,
  minify: true,
  sourcemap: true,
});

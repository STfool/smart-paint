import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import babel from "@rollup/plugin-babel";
import comonjs from "@rollup/plugin-commonjs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type { import("rollup".RollupOptions) } */
const options = {
  input: path.resolve(__dirname, "index.ts"),
  output: {
    dir: path.resolve(__dirname, "../build"),
    format: "cjs",
  },
  plugins: [
    comonjs(),
    babel({ babelHelpers: "bundled" }),
    json(),
    typescript({ tsconfig: path.resolve(__dirname, "tsconfig.json") }),
  ],
};

export default options;

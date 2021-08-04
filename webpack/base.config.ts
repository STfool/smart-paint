import { webpack, Configuration } from "webpack";
import * as path from "path";

const baseOptions: Configuration = {
  entry: path.resolve(__dirname, "../page/index.tsx"),
  output: {},
};

import { Configuration } from "webpack";
import * as path from "path";

const baseOptions: Configuration = {
  entry: path.resolve(__dirname, "../page/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../static"),
  },
  module: {
    rules: [
      {
        test: /\tsx?/,
        loader: "babel-loader",
      },
    ],
  },
};

export default baseOptions;

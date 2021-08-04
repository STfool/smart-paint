import { Configuration } from "webpack";
import * as path from "path";

const baseOptions: Configuration = {
  entry: path.resolve(__dirname, "../page/index.tsx"),
  resolve: {
    extensions: [".js", ".tsx", ".ts", ".d.ts"],
  },
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
};

export default baseOptions;

import { webpack } from "webpack";
import baseOptions from "./base.config";
import { merge } from "webpack-merge";
import * as path from "path";

const prodOptions = merge(baseOptions, {
  mode: "production",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "[id].[chunkhash:8].js",
  },
});

webpack(prodOptions, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(stats.toString());
});

import { webpack } from "webpack";
import baseOptions from "./base.config";
import { merge } from "webpack-merge";

process.env.NODE_ENV = "production";

const prodOptions = merge(baseOptions, {
  mode: "production",
  output: {
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

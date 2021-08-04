import {
  DllReferencePlugin,
  HotModuleReplacementPlugin,
  webpack,
} from "webpack";
import baseOptions from "./base.config";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackDevServer from "webpack-dev-server";
import * as path from "path";
import vendorManifest from "../build/vendor-manifest.json";

const devOptions = merge(baseOptions, {
  mode: "development",
  devtool: "inline-cheap-source-map",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js",
    chunkFilename: "[id].js",
  },
  plugins: [
    new DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, "../build/vendor-manifest.json"),
    }),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      templateContent: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>this is a test</title>
    <script src=/${vendorManifest.name}.js></script>
  </head>
  <body>
  </body>
</html>
      `,
    }),
  ],
});

const complier = webpack(devOptions);

const server = new WebpackDevServer(complier, {
  hot: true,
  contentBase: path.resolve(__dirname, "../build"),
  publicPath: "/",
});

server.listen(8080, (err) => {
  console.error("[webpack-dev-server]:: There are something wrong", err);
});

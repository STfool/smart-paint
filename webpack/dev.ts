import { HotModuleReplacementPlugin, webpack } from "webpack";
import baseOptions from "./base.config";
import { merge } from "webpack-merge";
import WebpackDevServer from "webpack-dev-server";
import * as path from "path";

const devOptions = merge(baseOptions, {
  mode: "development",
  devtool: "inline-cheap-source-map",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js",
    chunkFilename: "[id].js",
  },
  plugins: [new HotModuleReplacementPlugin()],
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

import {
  DllReferencePlugin,
  HotModuleReplacementPlugin,
  webpack,
} from "webpack";
import baseOptions from "./base.config";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackDevServer from "webpack-dev-server";
import path from "path";

process.env.NODE_ENV = "development";

const devOptions = merge(baseOptions, {
  mode: "development",
  output: {
    filename: "[name].js",
    chunkFilename: "[id].js",
  },
  plugins: [
    new DllReferencePlugin({
      manifest: path.resolve(__dirname, "../static/vendor-manifest.json"),
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
        </head>
        <body></body>
      </html>
      `,
    }),
  ],
});

const complier = webpack(devOptions, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(stats.toString());
});

const server = new WebpackDevServer(complier, {});

server.listen(8080, (err) => {
  console.error("[webpack-dev-server]:: There are something wrong", err);
});

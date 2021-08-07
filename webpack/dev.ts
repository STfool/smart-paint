import { HotModuleReplacementPlugin, webpack } from "webpack";
import { merge } from "webpack-merge";
import WebpackDevServer from "webpack-dev-server";
import * as path from "path";
import * as fs from "fs";

async function run() {
  const res = await import("./base.config");
  const baseOptions = res.default;

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
}

(async () => {
  if (
    fs.existsSync(path.resolve(__dirname, "../build/vendor.js")) &&
    fs.existsSync(path.resolve(__dirname, "../build/vendor-manifest.json"))
  ) {
    run();
  } else {
    const res = await import("./dll");
    const dllRun = res.default;
    const compiler = dllRun();

    // occur after complier done
    compiler.hooks.afterDone.tap("occur after complier done", () => {
      run();
    });
  }
})();

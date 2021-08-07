import { webpack } from "webpack";
import { merge } from "webpack-merge";
import * as path from "path";
import * as fs from "fs";

async function run() {
  // check whether mian** match exist or not, if exist clean thme and bundle latest
  const filenames = fs.readdirSync(path.resolve(__dirname, "../build"));

  (filenames || []).forEach((name) => {
    if (name.match(/^vendor/) === null) {
      fs.rmSync(path.resolve(__dirname, `../build/${name}`), { force: true });
    }
  });
  // start webpack bundle
  const res = await import("./base.config");
  const baseOptions = res.default;
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
}

(async () => {
  if (
    fs.existsSync(path.resolve(__dirname, "../build/vendor.js")) &&
    fs.existsSync(path.resolve(__dirname, "../bulid/vendor.manifest.json"))
  ) {
    run();
  } else {
    const res = await import("./dll");
    const dllRun = res.default;

    // occur after complier done
    dllRun().hooks.afterDone.tap("occur after complier done", () => {
      run();
    });
  }
})();

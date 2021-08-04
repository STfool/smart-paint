import { webpack, Configuration, DllPlugin } from "webpack";
import * as path from "path";

const dllOptions: Configuration = {
  mode: "none",
  entry: {
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    library: "vendor",
  },
  plugins: [
    new DllPlugin({
      path: path.resolve(__dirname, "../build/vendor-manifest.json"),
    }),
  ],
};

webpack(dllOptions, (err, stats) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(stats.toString());
});

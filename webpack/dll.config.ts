import { webpack, Configuration, DllPlugin } from "webpack";
import * as path from "path";

const dllOptions: Configuration = {
  entry: {
    webStatic: ["react", "react-dom"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../static"),
    library: "vendor",
  },
  plugins: [
    new DllPlugin({
      path: path.resolve(__dirname, "static/vendor-manifest.json"),
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

import {
  webpack,
  Configuration,
  DllPlugin,
  DefinePlugin,
  Compiler,
} from "webpack";
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
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new DllPlugin({
      context: __dirname,
      name: "vendor",
      format: true,
      path: path.resolve(__dirname, "../build/vendor-manifest.json"),
    }),
  ],
};

export default function dllRun(): Compiler {
  return webpack(dllOptions, (err, stats) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(stats.toString());
  });
}

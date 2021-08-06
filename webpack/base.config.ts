import { Configuration, DllReferencePlugin, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

const baseOptions: Configuration = {
  entry: path.resolve(__dirname, "../page/index.tsx"),
  resolve: {
    extensions: [".js", ".tsx", ".ts", ".d.ts"],
  },
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, "../build/vendor-manifest.json"),
    }),
    new HtmlWebpackPlugin({
      templateContent: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>this is a test</title>
    <script src="vendor.js"></script>
  </head>
  <body>
  </body>
</html>
      `,
    }),
  ],
};

export default baseOptions;

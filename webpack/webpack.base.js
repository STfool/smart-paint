const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const resolve = (src) => path.resolve(__dirname, '..', src);

module.exports = {
  entry: [],
  output: {
    path: resolve('.build'),
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
  entry: [resolve('react/index.jsx')],
  output: {
    filename: '[name][hash:8].bundle.js',
    path: resolve('.build'),
    chunkFilename: '[id].js',
    publicPath: '/.build/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      app: resolve('app'),
      reactapp: resolve('react'),
      img: resolve('react/assets/img'),
      svg: resolve('react/assets/svg'),
      styles: resolve('react/styles'),
    },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
    }),
  ],
};

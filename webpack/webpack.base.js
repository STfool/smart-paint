const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');

module.exports = {
  entry: [resolve('react/index.jsx')],
  output: {
    filename: '[name][hash:8].bundle.js',
    path: resolve('.build'),
    chunkFilename: 'js/[id].js',
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
        test: /\.(png|jpe?g|gif|webp)$/,
        exclude: resolve('react/assets/svg'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][contenthash:8].[ext]',
              output: 'assets/img',
            },
          },
        ],
      },
      {
        test: /\.(svg)$/,
        include: resolve('react/assets/svg'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][contenthash:8].[ext]',
              output: 'assets/svg',
            },
          },
          {
            loader: 'svgo-loader',
            plugins: [
              { removeTitle: true },
              { convertColors: { shorthex: false } },
              { convertPathData: false },
            ],
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

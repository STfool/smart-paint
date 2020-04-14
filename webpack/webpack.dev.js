const merge = require('webpack-merge');
const baseconfig = require('./webpack.base');

module.exports = merge(baseconfig, {
  mode: 'development',
  devServer: {
    port: 3000,
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
						loader: 'css-loader'
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
});

const merge = require('webpack-merge');
const baseconfig = require('./webpack.base');
const { resolve } = require('./common')

module.exports = merge(baseconfig, {
  mode: 'development',
  devServer: {
		port: 3000,
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [],
  },
});

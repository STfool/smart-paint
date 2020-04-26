const merge = require('webpack-merge');
const baseconfig = require('./webpack.base');
const webpack = require('webpack')

module.exports = merge(baseconfig, {
  mode: 'development',
  devServer: {
		port: 3000,
		hot: true
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});

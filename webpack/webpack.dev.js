const merge = require('webpack-merge');
const baseconfig = require('./webpack.base');
const webpack = require('webpack')
const path = require('path')

module.exports = merge(baseconfig, {
  mode: 'development',
  devServer: {
		port: 3000,
		hot: true,
		contentBase: './build/',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});

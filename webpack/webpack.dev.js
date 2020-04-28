const merge = require('webpack-merge');
const baseconfig = require('./webpack.base');
const { resolve } = require('./common')

module.exports = merge(baseconfig, {
  mode: 'development',
  devServer: {
		port: 3000,
		hot: true,
		contentBase: resolve('.build')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [],
	},
	plugins: [

	]
});

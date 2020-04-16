const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseconfig = require('./webpack.base');

module.exports = merge(baseconfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
    ],
	},
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCssAssetsPlugin({})]
	},
  plugins: [
		new CleanWebpackPlugin(),
		new ManifestPlugin()
  ],
});

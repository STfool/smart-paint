const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseconfig = require('./webpack.base');

module.exports = merge(baseconfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

const merge = require('webpack-merge');
const baseconfig = require('./webpack.base');

module.exports = merge(baseconfig, {
  mode: 'development',
});

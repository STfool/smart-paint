const webpack = require('webpack')
const { resolve } = require('./common')

module.exports = {
	entry: {
		react: ['react', 'react-dom'],
	},
	mode: 'production',
	output: {
		filename: '[name].dll.[hash:6].js',
		path: resolve('.build/dll'),
		library: '[name]_dll'
	},
	plugins: [
		new webpack.DllPlugin({
			// name 和 library 一致
			name: '[name]_dll',
			path: resolve('.build/dll/manifest.json')  // manifest.json 的生成路径
		})
	]
}

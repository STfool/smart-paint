const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const { resolve } = require('./common');

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
      "@app": resolve('app'),
      '@reactapp': resolve('react'),
      '@components': resolve('react/components'),
      '@img': resolve('react/assets/img'),
      '@svg': resolve('react/assets/svg'),
      '@styles': resolve('react/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        exclude: resolve('react/assets/svg'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][contenthash:8].[ext]',
              outputPath: 'assets/img',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        include: resolve('react/assets/svg'),
        use: [
          {
						loader: 'raw-loader',
						options: {
							esModule: false
						}
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
							hmr: isDev
						}
					},
					{
						loader: 'css-loader',
						options: {
							esModule: true
						}
					}
				]
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
							hmr: isDev
						}
					},
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							importLoaders: 2
						}
					},
					'postcss-loader',
					'less-loader'
				]
			}
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
		}),

		new MiniCssExtractPlugin({
			filename:  isDev ? 'css/[name].css' : 'css/[name][hash].css',
			chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[hash].css'
		})
  ],
};

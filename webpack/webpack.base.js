const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development'
const config = require('../public/config')[isDev ? 'dev': 'prod']
const { resolve } = require('./common');

module.exports = {
  entry: [resolve('react', 'index.jsx')],
  output: {
		filename: '[name][hash:8].bundle.js',
		path: resolve('.build'),
		chunkFilename: 'js/[id][chunkhash:8].chunk.js',
		publicPath: isDev ? '/' : '/.build/'
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
	optimization: {
		splitChunks: {  // 分割代码块
			cacheGroups: {
				common: {
					chunks: 'initial',
					name: 'common',
					minSize: 100, // 大小超过100字节
					minChunks: 3 // 最少引入3次
				}
			}
		},
		runtimeChunk: {
			name: 'manifest'
		}
	},
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
				use: ['thread-loader', 'cache-loader', 'babel-loader'],
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
							importLoaders: 2,
							modules: {
								mode: 'local'
							}
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
			config: config.template
		}),

		new MiniCssExtractPlugin({
			filename:  isDev ? 'css/[name].css' : 'css/[name][hash].css',
			chunkFilename: isDev ? 'css/[id].css' : 'css/[id].[hash].css'
		})
  ],
};

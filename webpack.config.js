const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const swcconf = require('./swc.config.json');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[contenthash].js',
	},
	optimization: {
		minimizer: [
			new ESBuildMinifyPlugin({
				target: 'es2015',
				css: true,
			}),
		],
		splitChunks: {
			chunks: 'all',
		},
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	devServer: {
		open: true,
		hot: true,
		port: 4000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'esbuild-loader',
						options: {
							loader: 'css',
							minify: true,
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'swc-loader',
					options: swcconf,
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				// profile: true
			},
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			favicon: false,
			template: path.join(__dirname, 'src/index.html')
		}),
	].filter(Boolean),
};

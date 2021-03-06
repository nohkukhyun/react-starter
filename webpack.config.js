const path = require('path')
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, options) => {
	const config = {
		mode: env.development ? 'development' : 'production',
		devtool: 'source-map',
		entry: {
			app: path.join(__dirname, 'src', 'index.tsx'),
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			//절대경로를 위한 설정
			alias: {
				'@src': path.resolve(__dirname, 'src'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@store': path.resolve(__dirname, 'src/store'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@routes': path.resolve(__dirname, 'src/routes'),
				'@components': path.resolve(__dirname, 'src/components'),
			},
		},
		devServer: {
			port: options.mode === 'development' ? 3000 : 9000,
			historyApiFallback: true,
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						compress: {
							//프로덕션일때만 콘솔로그 리므부
							drop_console: options.mode === 'production' ? true : false,
						},
					},
				}),
			],
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: ['babel-loader', 'ts-loader'],
				},
				{
					test: /\.html$/i,
					use: [
						{
							loader: 'html-loader',
							options: {
								minimize: true,
							},
						},
					],
				},
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
						},
					],
				},
			],
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './public/index.html',
				filename: './index.html',
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css',
			}),
			new CleanWebpackPlugin(),
			new Dotenv(),
		],
	}
	return config
}

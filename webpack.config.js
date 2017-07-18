var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: [
		'script-loader!jquery',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
		}),
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js',
	},
	resolve: {
		alias: {
			Main: path.resolve(__dirname, 'app/components/Main.jsx'),
			Clock: path.resolve(__dirname, 'app/components/Clock.jsx'),
			applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
		},
		extensions: [
			'.js',
			'.jsx'
		],
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: [
						'react',
						'es2015'
					],
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
			}
		],
	},
};
var path = require('path'),
		webpack = require('webpack'),
		HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname),
		APP_PATH = path.resolve(ROOT_PATH, 'app'),
		BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry:{
	  app: path.resolve(APP_PATH, 'index.jsx')
	},
	output: {
    path: BUILD_PATH,
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	devServer: {
	  historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
	  loaders:[
		  {
				test: /\.jsx?$/,
				loader: 'babel',
				include: APP_PATH,
			},
			{
			  test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	plugins: [
	  new HtmlWebpackPlugin({
		  title: 'My first react app'
		})
	],
	resolve: {
	  extensions: ['', '.js', '.jsx']
	}
}

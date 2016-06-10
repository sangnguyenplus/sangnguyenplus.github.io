var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			loader: 'babel',
			include: APP_DIR
		},
		{
			test : /\.css?$/,
			loaders : ['style', 'raw'],
			include : APP_DIR
		}]
	}
};

module.exports = config;
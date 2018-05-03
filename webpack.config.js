const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/')
	},
	devServer: {
		port: 4000,
		contentBase: path.resolve(__dirname, 'dist/')
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'stage-2']
			}
		}]
	}
}
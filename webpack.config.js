var Path= require('path'),
		webpack= require('webpack'),
		ExtractTextPlugin= require('extract-text-webpack-plugin');

module.exports= {
	entry: {
		bundle: [
			Path.resolve(__dirname, 'app/main.jsx'),
			'webpack/hot/dev-server'
		],
		vendors: ['jquery']
	},
	output: {
		path: Path.resolve(__dirname, 'public/'),
		filename: 'js/[name].js'
	},
	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js','jsx', '.css', '.scss'],
		alias: {
			'jquery': Path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js')
		}
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?includePaths[]='+ Path.resolve(__dirname, './node_modules/compass-mixins/lib'))},
			{ test: /\.js(x?)$/, loaders: ['react-hot', 'babel'], include: Path.resolve(__dirname, 'app')}
		],
		noParse: ['jquery']
	},
	plugins:[
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jquery': 'jquery',
			'React': 'react/addons'
		}),
		//new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new ExtractTextPlugin('css/app.css')
	],
	//

};

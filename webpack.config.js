var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
  	new webpack.DefinePlugin({ 
    	'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') } 
  	})
  ],
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

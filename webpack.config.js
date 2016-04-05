var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

module.exports = {
  entry: './js/main.js',
  output: { path: __dirname + '/dist/', publicPath: 'dist/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.styl$/, loader: stylusLoader, exclude: /node_modules/ }
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css")
  ]
};

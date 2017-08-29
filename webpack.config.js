var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: './src/js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR + '/jsx',
        loader : 'babel-loader'
      },
      {
        test : /\.css?/,
        include : APP_DIR + '/css',
        loader : 'style-loader!css-loader'
      },
      {
        test:   /\.html/,
        loader: 'html',
      }
    ]
  }
};

module.exports = config;

var path = require('path')
var webpack = require('webpack')

var DIR_DIST = 'dist'
var DIR_SRC = 'src'

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: path.join('.', DIR_DIST),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [ path.join('.', DIR_SRC), 'node_modules' ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [ 'airbnb', 'es2015', 'react' ],
        },
      }
    ],
  },
}

var path = require('path')
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

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
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [ 'airbnb', 'es2015', 'react' ],
        },
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: path.join('.', DIR_SRC),
            },
          },
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Country Search',
    }),
  ]
}

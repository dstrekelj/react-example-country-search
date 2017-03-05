// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path')

var DIR_SRC = 'src'

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.s(a|c)ss$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=2',
          'resolve-url-loader?root=' + path.join('.', DIR_SRC),
          'sass-loader?sourceMap',
        ]
      }
    ],
  },
  resolve: {
    modulesDirectories: [ path.join('.', DIR_SRC), 'node_modules' ],
  },
};

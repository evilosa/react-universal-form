const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: "index.js",
    libraryTarget: 'umd',
    library: 'react-universal-form',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.css'],
    modules: ['node_modules'],
    alias: {
      components: path.resolve('./src/components'),
      features: path.resolve('./src/features'),
      theme: path.resolve('./src/theme'),
      utils: path.resolve('./src/utils'),
    },
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
};
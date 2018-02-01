const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'index.js': './src/index.js',
    'components/index.js': './src/components/index.js',
    'components/Action/index.js': './src/components/Action/index.js',
    'components/NavBar/index.js': './src/components/NavBar/index.js',
    'components/NavBarItem/index.js': './src/components/NavBarItem/index.js',
  },
  output: {
    path: path.resolve('dist'),
    filename: "[name]",
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
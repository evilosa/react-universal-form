const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'index.js': './src/index.js',
    'components/index.js': 'components/index.js',
    'components/Action/index.js': 'components/Action',
    'components/ActionsPane/index.js': 'components/ActionsPane',
    'components/Button/index.js': 'components/Button',
    'components/ControlledForm/index.js': 'components/ControlledForm',
    'components/Layout/index.js': 'components/Layout',
    'components/NavBar/index.js': 'components/NavBar',
    'components/NavBarItem/index.js': 'components/NavBarItem',
    'components/TextInput/index.js': 'components/TextInput',
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
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.UglifyJsPlugin()
  ],
};
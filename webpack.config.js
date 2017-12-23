const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const context = path.resolve(__dirname, 'src');
const git = require('git-rev-sync');
const buildVersion = require('./version.json');
const gitsha = git.long();
const DEV_PORT = process.env.DEV_PORT || 4000;

const config = {
  context,
  stats: 'minimal',
  entry: './index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?|js?$/,
        loader: 'babel-loader',
        exclude: /node_modules\/[^\@]/,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader?name=[name]-[hash].[ext]!image-webpack-loader',
        query: {
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader?name=[name]-[hash].[ext]!image-webpack-loader',
        query: {
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
        },
      },
      {
        test: /\.woff2?$/,
        loader: 'file-loader?name=[name]-[hash].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  devServer: {
    inline: true,
    port: DEV_PORT,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:' + (process.env.API_PORT || 3000),
        secure: false,
        ws: true,
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.css'],
    modules: ['node_modules'],
    alias: {
      'css-settings$': path.resolve('./src/css-settings.js'),
      assets: path.resolve('./src/assets'),
      components: path.resolve('./src/components'),
      containers: path.resolve('./src/containers'),
      models: path.resolve('./src/models'),
      styles: path.resolve('./src/styles'),
      tests: path.resolve('./tests'),
    },
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'global.version': JSON.stringify(gitsha),
      'global.appversion': JSON.stringify(buildVersion.IMAGE_VERSION),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
      mangle: {
        toplevel: true,
      },
      output: {
        comments: false,
        semicolons: true,
      },
    })
  );
  config.plugins.push(new webpack.optimize.DedupePlugin());
} else {
  config.devtool = 'cheap-module-eval-source-map';
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = config;

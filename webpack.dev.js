const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});

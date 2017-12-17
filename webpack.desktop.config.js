const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new ElectronConnectWebpackPlugin({
      path: path.join(__dirname, "/desktop/main.js"),
      logLevel: 0
    }),
  ],
  devtool: 'source-map',
  target: 'electron'
});

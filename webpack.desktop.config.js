const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new ElectronConnectWebpackPlugin({
      path: path.join(__dirname, '/desktop/main.js'),
      logLevel: 0
    })
  ],
  devtool: 'source-map',
  target: 'electron'
  // externals: {
  //   'electron': 'require("electron")',
  //   'net': 'require("net")',
  //   'remote': 'require("remote")',
  //   'shell': 'require("shell")',
  //   'app': 'require("app")',
  //   'ipc': 'require("ipc")',
  //   'fs': 'require("fs")',
  //   'buffer': 'require("buffer")',
  //   'system': '{}',
  //   'file': '{}'
  // }
});

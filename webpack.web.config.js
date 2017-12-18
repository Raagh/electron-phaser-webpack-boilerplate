const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpack = require('webpack');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['./', './dist']
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"web"'
      }
    })
  ],
  target: 'web'
});

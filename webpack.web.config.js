const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['./', './dist']
      }
    })
  ],
  devtool: 'source-map',
  target: 'web'
});

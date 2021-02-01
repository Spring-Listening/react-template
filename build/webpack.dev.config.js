const { merge } = require('webpack-merge');
const path = require('path')
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8085,
    inline: true,
    hot: true,
    historyApiFallback: true
  }
});

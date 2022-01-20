/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-02 10:31:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-20 10:18:16
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: '/react-template',
  },
  devServer: {},
});

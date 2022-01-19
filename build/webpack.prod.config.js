/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-02 10:31:59
 * @LastEditors:
 * @LastEditTime: 2022-01-19 19:50:10
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'production',
  publicPath: '/react-template',
  devServer: {

  }
});

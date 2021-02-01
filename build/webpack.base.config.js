const webpack = require('webpack');
const SpeedMeasureWebpack5Plugin = require('speed-measure-webpack5-plugin');
const smw = new SpeedMeasureWebpack5Plugin();
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = smw.wrap({
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8].js'
  },
  
  module: {
    rules: [
      {
        test: /\.(js?|jsx?|ts?|tsx?)$/,
        exclude: [/node_modules/, /public/, /(.|_)min\.js$/],
        use: [
          // 开启多线程池  弊端开线程和线程通信需要时间的
          {
            loader: 'thread-loader',
            options: { workers: 3 }
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // 自动babel缓存
            }
          }
        ]
      },
      // TODO 用ts-loader时无法引入图片，解析不了
      // {
      //   test: /\.ts(x)?$/,
      //   loader: 'ts-loader',
      //   exclude: [/node_modules/, /public/, /(.|_)min\.js$/]
      // },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/theme/variable.less')
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              outputPath: 'images/',
              esModule: false
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.tsx',
      '.ts'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    plugins: [
      // 将 tsconfig.json 中的路径配置映射到 webpack 中
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      })
    ],
  },
  plugins: [ 
    // new CopyPlugin({
    //   patterns: [{ from: 'src/index.html' }],
    // }),
    new HtmlWebpackPlugin({
      template: '/public/index.html',
      filename: 'index.html'
    }),

    new LodashModuleReplacementPlugin,
    new MiniCssExtractPlugin(),
    new FriendlyErrorsPlugin({
      onErrors: (severity, errors) => {
        let error = errors[0];
        notifier.notify({
            title: 'webpack编译失败了',
            message: severity + ':' + error.name,
            subtitle: error.file || ''
        });
      }
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve('dist')],
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});


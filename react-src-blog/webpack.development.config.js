/*
 * @Author: duxianwei
 * @Date: 2017-08-07 20:10:37
 * @Last Modified by: duxianwei
 * @Last Modified time: 2017-08-11 18:28:03
 */

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const casProxy = require('./proxy');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const PORT = 3020

module.exports = {
  entry: {
    js: './app/client.js',
    vendor: [
      'react', 'classnames', 'react-router', 'react-dom',
    ],
  },
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: './vendor.js',
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      components: __dirname + '/app/components',
      actions: __dirname + '/app/actions',
      api: __dirname + '/app/api',
      reducers: __dirname + '/app/reducers',
      utils: __dirname + '/app/utils',
      constants: __dirname + '/app/constants',
      controllers: __dirname + '/app/controllers',
      style: __dirname + '/app/style',
    },
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel',
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
      },
      {
        test: /\.css/,
        // loader: 'style!css',
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap=true!postcss-loader?sourceMap=true!less-loader?sourceMap=<true></true>'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.(woff|eot|ttf|svg|gif)$/,
        loader: 'file-loader?name=iconfont/[path][name].[ext]',
      },
    ],
  },
  plugins: [
    // 定义环境变量为开发环境
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      IS_DEVELOPMETN: true,
    }),
    // 提取css
    new ExtractTextPlugin('vendor.[hash].css'),
    // 根据入口文件，提取重复引用的公共代码类库，打包到单独文件中
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 入口文件名
      filename: 'vendor.bundle.js', // 打包后的文件名
    }),
    /* 压缩优化代码开始  可以关掉*/
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    /* 压缩优化代码结束*/
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/index.html'),
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/login`,
    }),
    // 分析代码
    new BundleAnalyzerPlugin({ analyzerPort: 8189 }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './app/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    // proxy: casProxy(),
    host: '0.0.0.0',
    port: PORT,
  },
}

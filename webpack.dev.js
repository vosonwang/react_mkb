const common = require('./webpack.base.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
  devtool: 'inline-source-map',
  plugins: [
    // HMR shows correct file names in console on update.
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: 'public/admin.html',
      chunks: ['admin']
    }),
    new HtmlWebpackPlugin({
      filename: 'doc.html',
      template: 'public/doc.html',
      chunks: ['doc']
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'public/404.html',
      chunks: ['notFound']
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  devServer: {
    clientLogLevel: 'warning',
    // 设置webpack-dev-server的工作目录
    contentBase: './dist',
    hot: true,
    inline: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/doc/, to: '/doc.html' },
        { from: /^\/admin/, to: '/admin.html' },
        { from: /^\/.*/, to: '/404.html' }
      ]
    },
    compress: true
  }
})

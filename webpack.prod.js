// webpack的配置文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',  // 模式  development(代码未被压缩，易于调试)/production (会被压缩，代码量小)
  entry: path.join(__dirname, 'src', 'index.js'),   // __dirname 指的当前目录
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exlude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template  模板
      template: path.join(__dirname, 'src', 'index.js'),
      filename: 'index.html'    // 这个是产出的文件，会放到dist文件里来
    })
  ]
}
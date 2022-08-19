const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve('__dirname', './dist'),
    filename: 'bundle.js'
  },
  // devServer热模块替换
  devServer: {
    hot: true
  },
  // 寻找对应的后缀名
  resolve: {
    extensions: ['.js', '.ts', '.cjs', '.json']
  },
  // 处理这些文件的规则
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  // 使用插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
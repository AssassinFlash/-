const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 模式配置
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  // 配置loader
  module: {
    rules: [
      // 处理less
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 处理图片资源
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          // 打包后放入什么文件夹
          filename: "img/[name]-[hash:6][ext]",
        },
        parser: {
          // 限制在100kb一下使用base64编码
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },
  // webpack插件
  plugins: [
    // 自动删除build文件夹，重新生成build文件夹
    new CleanWebpackPlugin(),
    // 打包index.html进入build文件夹
    new HTMLWebpackPlugin({
      // 配置模板
      template: "./public/index.html",
      title: "webpack项目",
    }),
    // 配置BASE_URL
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    // 复制public文件夹下的favicon.ico到build文件夹
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};

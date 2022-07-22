const path = require("path");

// 插件需要先导入，一般插件导出的是一个类
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 模式配置
  // development | production
  // 准备打包上线的时候设置production，开发阶段设置development
  mode: "development",
  // 设置source-map，建立js映射文件，方便调试代码和错误
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      // 处理css|less
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      // 处理图片资源
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          // 打包后所处文件夹
          filename: "img/[name]-[hash:6][ext]",
        },
        parser: {
          // 限制在100kb大小下使用base64编码
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },

  // 使用插件，plugins是一个数组
  plugins: [
    // clean-webpack-plugin会先删除打包的文件夹，然后再重新打包
    new CleanWebpackPlugin(),

    // 使用html-webpack-plugin生成index.html入口文件
    new HtmlWebpackPlugin({
      // 配置模板
      title: "webpack项目",
      template: "./public/index.html",
    }),

    // 使用webpack自带的DefinePlugin声明BASE_URL
    new DefinePlugin({
      BASE_URL: '"./"',
    }),

    // 使用copy-webpack-plugin将public文件夹下的favicon.ico复制到build文件夹
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          // 忽略public文件夹下的index.html文件，因为它是作为模板给html-webpack-plugin使用的
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};

const path = require("path");

// 引入各种插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "./build"),
    filename: "js/bundle.js",
  },

  // 配置各种loader
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
        generator: {
          filename: "img/[name]-[hash:6][ext]",
        },
      },
      // 配置babel，使用babel.config.js文件
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ["@babel/preset-env"],
      //     },
      //   },
      // },
    ],
  },

  // 配置各种插件
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "webpack项目",
    }),
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

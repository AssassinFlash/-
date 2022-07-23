const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

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
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
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
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  // 配置各种插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      title: "webpack项目",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS: false,
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
    new VueLoaderPlugin(),
  ],
};

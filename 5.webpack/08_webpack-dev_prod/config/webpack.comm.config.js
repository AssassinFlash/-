const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  target: "web",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/bundle.js",
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".jsx"],
    alias: {
      js: path.resolve(__dirname, "../src/js"),
    },
  },
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
        generator: {
          filename: "img/[name]-[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "webpack项目",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new VueLoaderPlugin(),
  ],
};

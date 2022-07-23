const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.comm.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});

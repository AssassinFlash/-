const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.comm.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
});

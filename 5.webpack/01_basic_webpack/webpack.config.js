// webpack是在node环境下运行的，所以一般配置写的都是commonjs的导出方式
const path = require("path");

module.exports = {
  // 入口文件
  entry: "./src/index.js",
  output: {
    // 要写绝对路径
    path: path.resolve(__dirname, "./dist"),
    // 打包出来的文件名
    filename: 'main.js'
  },
};

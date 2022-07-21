// webpack是运行在node环境下的，所以编写配置文件要使用commonjs的方式
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js",
  },
  // 不同模块的配置
  module: {
    // 根据rules来配置不同模块，它是一个数组
    rules: [
      {
        test: /\.css$/, // 正则匹配文件名
        // loader: "css-loader" // 使用css-loader处理.css文件

        // 也可以这样写：这样可以配置多个loader，这是完整的写法
        // css-loader只是负责将.css文件进行解析，并不会将解析之后的css插入页面中
        // 还需要一个style-loader将css插入到页面中去
        // loader的执行是有顺序的，use的顺序是从后面往前面加载，从右向左执行的
        use: [
          // {loader: 'css-loader'}
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.less$/, // 正则匹配文件名
        // 先用less-loader处理成.css文件，然后用css-loader解析.css文件，然后用style-loader将css插入到页面中
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ]
      }
    ],
  },
};

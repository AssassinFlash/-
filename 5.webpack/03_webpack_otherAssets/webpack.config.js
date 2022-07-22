const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 处理图片资源
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     // 额外的参数
      //     options: {
      //       // 把打包出来的资源放到img文件夹下
      //       outputPath: "img",
      //       // 更改打包后的文件名
      //       name: "[name]-[hash:6].[ext]"
      //     }
      //   }
      // }

      // 和file-loader一样，url-loader也能处理图片资源
      // url-loader可以将图片转换成base64编码，它会直接编写在打包后的bundle.js文件，
      // 这样可以和页面一起被请求，减少多次请求过程
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       outputPath: "img",
      //       name: "[name]-[hash:6].[ext]",
      //       // 小于100 kb 的才做base64编码
      //       limit: 100 * 1024
      //     },
      //   },
      // },

      // 但是现在webpack5已经不怎么使用url-loader和file-loader了
      // 直接使用资源模块类型(asset module type) 来替代上面这些loader
      // 这样就不用下载各种各样的loader
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // asset/resource 类似于file-loader的作用
        // type: "asset/resource"
        type: "asset",
        generator: {
          // 打包后文件所处的文件夹
          filename: "img/[name]-[hash:6][ext]",
        },
        parser: {
          // 限制在100kb以下的进行base64编码
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },

      // asset同样可以处理字体图标
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]-[hash:6][ext]",
        },
      },
    ],
  },
};

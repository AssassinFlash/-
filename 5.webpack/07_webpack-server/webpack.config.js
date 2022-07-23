const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // 对web打包
  target: "web",
  mode: "development",
  devtool: "source-map",
  // watch: true,
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "./build"),
    filename: "js/bundle.js",
  },
  // 关于webpack-dev-server的配置信息
  // devServer：监听文件的变化，并自动刷新浏览器
  // webpack-dev-server在编译后不会写入到任何输出文件，而是将bundle文件保留在内存中
  devServer: {
    // 热模块替换
    hot: true,
    // 压缩
    compress: true,
    // 配置网络请求代理，解决网络请求跨域的问题
    proxy: {
      // 在你请求/api的时候，将其代理(映射)到后边的值里
      // 这样，在对比如/api/users的请求时，会将该请求代理到http://localhost:8888/api/users里
      // 这样是有问题的，因为我们在这里配置代理是不希望传递/api
      // "/api": "http://localhost:8888",

      "/api": {
        target: "http://localhost:8888",
        // 这样意味着，当请求是以/api开头时，将/api重写为""字符串，这样就不会传递/api
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  // 设置模块如何被解析
  // resolve可以帮助webpack从每个require/import语句中，找到需要引入的合适的模块代码
  resolve: {
    // 确定是文件还是文件夹
    // 如果是一个文件且具有扩展名，则直接打包文件
    // 否则，使用resolve.extensions选项作为文件扩展名解析
    // 如果是一个文件夹，则会查找文件夹下的index(默认值)，再根据extensions来解析扩展名
    // extensions: [".js", ".json", ".cjs"] // 默认值
    extensions: [".vue", ".js", ".mjs", ".json"],
    // 给路径起别名：
    alias: {
      // path.resolve理解成cd xxx路径
      js: path.resolve(__dirname, "src/js"),
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "webpack项目",
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
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

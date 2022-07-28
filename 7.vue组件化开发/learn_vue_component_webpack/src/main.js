import { createApp } from "vue";
import App from "./01_异步组件_webpack打包/App.vue";
// import sum from "./01_异步组件_webpack打包/js/math";

// 通过import()函数导入的模块，后续webpack打包的时候会进行分包的操作
// 即将这一模块另外打包到独立的js文件中，且import()函数是promise，当它调用.then的时候服务器再请求该独立的文件
// 这样相当于服务器按需加载文件，比一次性加载全部文件性能要高，提升了首屏渲染的速度
import("./01_异步组件_webpack打包/js/math").then((res) => {
  console.log(sum(20, 30));
});

createApp(App).mount("#app");

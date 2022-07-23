import { createApp } from "vue/dist/vue.esm-browser";
import "js/element";
// import App from "./vue/App.vue";

// 开启热替换
if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log("element模块发生热替换");
  });
}

const message = "hello world";
const names = ["abc", "cba", "nba"];

names.forEach((name) => console.log(name));
console.log(message);
// console.log("--watch热更新");
// console.log('-----使用了配置文件的watch');
console.log("使用了webpack-dev-server的热更新");

// Vue代码
// const app = createApp(App);
const app = createApp({
  template: "<h2>{{message}}, Vue</h2>",
  data() {
    return {
      message: "hello world",
    };
  },
});
app.mount("#app");

import { createApp } from "vue";
import App from './04_teleport/App.vue'
// import plugins_object from "./05_编写Vue插件/plugins_object.js";
import plugins_function from "./05_编写Vue插件/plugins_function.js";
const app = createApp(App);

// 全局指令
// app.directive("focus", {
//   mounted: (el) => {
//     el.focus()
//   }
// })

// 安装插件：app.use()
// use方法会自动调用插件的install()函数，并把app作为参数传进install函数
// app.use(plugins_object)
app.use(plugins_function)

app.mount("#app");

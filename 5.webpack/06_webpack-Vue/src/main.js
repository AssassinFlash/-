import { createApp } from "vue/dist/vue.esm-browser";
import "./js/element";
import App from './vue/App.vue'

const message = "hello world";
const names = ["abc", "cba", "nba"];

names.forEach((name) => console.log(name));
console.log(message);

// Vue代码
const app = createApp(App);
// const app = createApp({
//   template: "<h2>{{message}}, Vue</h2>",
//   data() {
//     return {
//       message: "hello world",
//     };
//   },
// });
app.mount("#app");

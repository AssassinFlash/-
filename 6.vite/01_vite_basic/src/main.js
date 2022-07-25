import _ from "lodash-es";
import { sum } from "./js/math";

import "./css/style.less";

import { createApp } from "vue";
import App from "./vue/App.vue";

console.log("hello world");
console.log(sum(20, 30));

console.log(_.join(["abc", "cba"], "-"));

const titleEl = document.createElement("div");
titleEl.classList.add("title");
titleEl.innerHTML = "你好, vite";

document.body.appendChild(titleEl);

const app = createApp(App);
app.mount("#app");

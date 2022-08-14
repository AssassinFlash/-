import { createApp } from "vue";
// import App from "./App.vue";
import App from './05_modules.vue'
// 和router一样，store也是一个插件，使用use会自动install
import store from './store-root'

createApp(App).use(store).mount("#app");

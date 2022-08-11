import {createApp} from 'vue'
import App from './App.vue'
// 使用路由：它是一个插件，所以用到use方法，自动install路由对象
import router from "./router/index.js";

createApp(App).use(router).mount('#app')

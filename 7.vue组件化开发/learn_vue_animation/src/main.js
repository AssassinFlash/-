import { createApp } from 'vue'
import App from './02_结合animate库使用/02_自定义过度类名.vue'
// 引入依赖图中，webpack/vite之后会将它打包
import 'animate.css'

createApp(App).mount('#app')

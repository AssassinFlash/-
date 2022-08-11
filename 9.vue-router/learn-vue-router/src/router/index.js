import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../pages/Home.vue'

// 配置 路由 -> 组件 的映射关系
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    // import()函数导入的模块，会在打包的时候进行分包操作
    // 即将这一模块打包到独立的js文件中，且import()函数是promise，通过调用.then让服务器来请求该模块
    // 相当于让服务器按需加载，比一次性加载所有文件速度要快
    component: () => import('../pages/About.vue')
  }
]

// 创建路由对象，将路由模式和路由映射表集合起来
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
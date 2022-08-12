import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";

// 配置 路由 -> 组件 的映射关系
// routes数组装的每个都是route对象
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    // 命名路由，之后在用到路由跳转的时候可以通过命名来跳转
    name: "home",
    // 路由的元属性(额外属性)，可以拿到这个route对象，通过route.meta来取到这个route对象的元属性
    meta: {
      name: "jzh",
      age: 25,
    },
  },
  {
    path: "/about",
    // import()函数导入的模块，vite/webpack会在打包的时候进行分包操作
    // 即将这一模块打包到独立的js文件中，且import()函数是promise，通过调用.then让服务器来请求该模块
    // 相当于让服务器按需加载，比一次性加载所有文件速度要快
    // 这就是路由懒加载：用到的时候才加载
    // 可以看到，在打包的时候，使用懒加载，打包会额外多出一个独立文件，表示的就是这个About组件，在需要的时候服务器才下载引入
    component: () => import("../pages/About.vue"),
    // component: About
  },
  // 动态路由匹配：
  // 比如现在我想要 /user/jzh 或者是 /user/coder，这样的不能写死的路由
  // /user/:username 这个username自己起，这个字段称为路径参数
  // 而且，动态路由在刷新页面的时候不会丢失参数
  {
    path: "/user/:username/id/:id",
    name: "user",
    component: () => import("../pages/User.vue"),
  },
  // 路径匹配：固定写法 /:pathMatch(.*)，这里就可以做一个任意匹配
  // 当上面所有规则都匹配不到的时候，就会来到这里
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/404.vue"),
  },
];

// 创建路由对象，将路由模式和路由映射表集合起来
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

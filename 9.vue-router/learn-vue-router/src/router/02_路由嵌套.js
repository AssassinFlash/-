import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/Home.vue"),
    // 嵌套路由，称为二级路由，这一层的路由可以在Home页面中展示，来回切换
    children: [
      {
        path: "",
        redirect: "/home/message",
      },
      {
        // /home/message
        // 不能随意加 / 否则会匹配不到
        path: "message",
        name: "message",
        component: () => import("../components/HomeMessage.vue"),
      },
      {
        path: "product",
        name: "product",
        component: () => import("../components/HomeProduct.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/user/:username/id/:id",
    name: "user",
    component: () => import("../pages/User.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../pages/404.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  // 编程式导航也可以使用像router-link那样的active-class，做激活时的样式转变
  linkActiveClass: "jzh-active",
});

export default router;

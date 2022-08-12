<template>
  <h2>这是Home组件的内容</h2>

  <button @click="$router.push({ name: 'message' })">消息</button>
  <button @click="goProduct">产品</button>
  <button @click="$router.push('/home/shop')">商品</button>

  <!-- 二级路由的展示展位 -->
  <router-view />
</template>

<script setup>
// 获取路由对象
import { useRouter } from "vue-router";

const router = useRouter();
// 编程式导航
const goProduct = () => {
  router.push({
    name: "product",
    query: {
      name: "jzh",
      age: 25,
    },
  });
};
</script>

<style scoped></style>

<template>
  <h2>User组件：{{ $route.params.username }}</h2>
</template>

<script setup>
// 获取路径参数
import { useRoute } from "vue-router";
// 返回一个route对象，这个route对象就是当前路由相关的值
const route = useRoute();
console.log(route.params.username);
</script>

<script>
export default {
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped></style>

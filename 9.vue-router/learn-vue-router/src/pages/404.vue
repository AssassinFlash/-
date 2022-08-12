<template>
  <h2>你访问的页面不存在</h2>
  <!-- 拿到匹配的路径 -->
  <h2>{{ $route.params.pathMatch }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route);
</script>

<style lang="scss" scoped></style>

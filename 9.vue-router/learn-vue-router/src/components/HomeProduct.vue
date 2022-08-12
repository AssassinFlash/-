<template>
  <h2>这是HomeProduct组件</h2>
  <!-- 拿到query参数，也就是url的?后面的参数 -->
  <h3>{{ $route.query.name }}</h3>
  <h3>{{ $route.query.age }}</h3>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.query);
</script>

<style lang="scss" scoped></style>

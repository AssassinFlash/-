<template>
  <h2>组件开始</h2>
  <slot>
    <!-- 插槽可以自定义内容 -->
    <h3>我是默认内容</h3>
  </slot>
  <slot></slot>
  <slot></slot>
  <h2>组件结束</h2>
</template>

<script setup>

</script>

<style scoped>

</style>
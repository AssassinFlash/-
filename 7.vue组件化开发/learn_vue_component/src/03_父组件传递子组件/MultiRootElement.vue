<template>
  <!-- 多个根节点的attribute如果没有绑定，会报警告，必须手动的指定要绑定到哪个属性上 -->
  <h2 :id="$attrs.id">MultiRootElement</h2>
  <h2>MultiRootElement</h2>
  <h2>MultiRootElement</h2>

</template>

<script setup>

</script>

<style scoped>

</style>
<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <!-- 使用内置组件transition来帮助单元素或者组件实现过渡动画 -->
  <transition name="fade">
    <h2 v-if="isShow">hello world</h2>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>

<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
  </div>
  <transition name="animate" appear>
    <h2 class="title" v-if="isShow">hello animate</h2>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
.title {
  display: inline-block;
}

/* 使用第三方库的动画 */
.animate-enter-active {
  animation: heartBeat 1s ease;
}
.animate-leave-active {
  /* 动画反转 */
  animation: heartBeat 1s ease reverse;
}
</style>

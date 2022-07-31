<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <br />
  <!-- type属性：根据animation结束还是根据transition结束 -->
  <!-- 这是为了解决animation和transition两者结束时间不同造成的冲突问题, 一般来说写结束时间比较长的 -->
  <transition name="move_and_opacity" type="animation">
    <h2 class="title" v-if="isShow">Hello Animation</h2>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
/* 同时设置动画和过渡 */
@keyframes move {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0);
  }
}

.move_and_opacity-enter-from,
.move_and_opacity-leave-to {
  opacity: 0;
}
.move_and_opacity-enter-active,
.move_and_opacity-leave-active {
  transition: opacity 1s ease;
}
.move_and_opacity-enter-active {
  animation: move 0.5s;
}
.move_and_opacity-leave-active {
  animation: move 0.5s reverse;
}
.move_and_opacity-enter-to,
.move_and_opacity-leave-from {
  opacity: 1;
}

.title {
  width: 300px;
  height: 300px;
  background: pink;
}
</style>

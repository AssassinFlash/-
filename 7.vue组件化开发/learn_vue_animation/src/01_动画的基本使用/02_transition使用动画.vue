<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <br />
  <transition name="bounce">
    <h2 class="title" v-if="isShow">Hello Animation</h2>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
/* transition 除了过渡外，还能使用动画 */
/* 使用动画就不用加from,to了 */
.bounce-enter-active {
  animation: bounce 1s;
}

.bounce-leave-active {
  /* 动画反转：reverse */
  animation: bounce 1s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.title {
  width: 300px;
  height: 300px;
  background: pink;
}
</style>

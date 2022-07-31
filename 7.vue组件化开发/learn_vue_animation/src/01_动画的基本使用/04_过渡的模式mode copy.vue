<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <br />
  <!-- 我们会看到两个h2会同时存在，这是我们不希望看到的 -->
  <!-- 不希望同时执行进入和离开动画，就需要给transition组件设置mode模式 -->
  <!-- in-out：新元素先执行过渡 -->
  <!-- out-in：当前元素先执行过渡(一般使用这个) -->
  <transition name="move_and_opacity" type="animation" mode="in-out">
    <h2 class="title" v-if="isShow">Hello Animation</h2>
    <h2 class="title" v-else>你好啊 transition组件</h2>
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
  transition: opacity 0.5s ease;
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

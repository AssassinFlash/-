<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
  </div>
  <!-- 在 transition 组件中写自定义过渡类名 -->
  <!-- enter-active-class、leave-active-class...  它们的优先级高于普通的默认类名 -->
  <transition
    enter-active-class="animate__animated animate__flip"
    leave-active-class="animate__animated animate__lightSpeedInRight"
    appear
  >
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

/* 还可以自定义修改第三方库的动画类名 */
.animate__animated {
  animation-duration: 0.5s;
}
.animate__flip {
  animation-direction: reverse;
}
</style>

<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <!-- 使用内置组件transition来帮助单元素或者组件实现过渡动画 -->
  <!-- 如果transition组件提供了js钩子函数, 那么这些钩子会在恰当的时机调用 -->
  <transition name="fade">
    <!-- 也可以是单个组件 -->
    <h2 v-if="isShow">hello world</h2>
  </transition>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<style scoped>
/* transition组件自动查看目标是否应用了css过渡或者动画，并在恰当的时机添加或删除css类名 */
/* v-enter-from: 定义进入过渡的开始状态，在元素被插入之前生效 */
/* v-enter-active: 定义过渡生效时的状态，在过渡完成后被移除 */
/* v-enter-to: 定义进入过渡的结束状态，在过渡完成的下一帧生效 */

/* v-leave-from: 定义离开过渡的开始状态 */
/* v-leave-active: 定义过渡生效时的状态 */
/* v-leave-to: 离开过渡的结束状态，在过渡完成的下一帧生效 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
</style>

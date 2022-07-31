<template>
  <button @click="isShow = !isShow">显示/隐藏</button>
  <br />
  <!-- 默认来讲首次加载页面是没有动画的 -->
  <!-- 希望首次加载就添加动画,就要给transition组件添加 appear 属性 -->
  <transition name="move_and_opacity" mode="out-in" appear>
    <component :is="isShow?'home':'about'"></component>
  </transition>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import { ref } from 'vue'

export default {
  components: {
    Home,
    About
  },
  setup() {
    const isShow = ref(true)

    return {
      isShow
    }
  }
}
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

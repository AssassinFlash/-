<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
  </div>
  <!-- transition组件给我们提供了javascript钩子 这些钩子帮助我们监听动画执行到什么阶段 -->
  <!-- 添加css=false，让vue跳过css的自动检测，避免过渡过程中css规则的影响 -->
  <transition @enter="onEnter" @leave="onLeave" :css="false">
    <h2 v-if="isShow">hello gsap animate</h2>
  </transition>
</template>

<script>
import {gsap} from "gsap";

export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    // 钩子函数有两个参数
    // el：监听的元素
    // done：回调函数，当我们使用js来执行过渡动画时，需要进行done回调，表示告知动画完成
    onEnter(el, done) {
      // 在enter钩子中使用from函数
      // 从什么状态开始进入
      gsap.from(el, {
        scale: 0,
        x: 200, // 类比 translateX(200px)
        onComplete: done // 完成时调用done函数
      })
    },
    onLeave(el, done) {
      // 在leave钩子中使用to函数
      // 离开要到什么状态
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    }
  }
}
</script>

<style scoped>

</style>
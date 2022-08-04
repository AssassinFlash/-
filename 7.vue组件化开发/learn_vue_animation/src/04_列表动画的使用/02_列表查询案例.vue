<template>
  <input type="text" v-model="keyword">
  <transition-group tag="p" @before-enter="beforeEnter" @enter="onEnter" @leave="onLeave">
    <!--  绑定到data-index属性上，到时候取就通过el.dataset.index就可拿到index值  -->
    <template v-for="(name, index) in showNames" :key="name" :data-index="index">
      <li>{{ name }}</li>
    </template>
  </transition-group>
</template>

<script>
import {gsap} from "gsap";

export default {
  data() {
    return {
      names: ['abc', 'cba', 'jzh', 'kobe', 'james', 'curry'],
      keyword: ""
    }
  },
  computed: {
    showNames() {
      return this.names.filter(name => {
        return name.indexOf(this.keyword) !== -1
      })
    }
  },
  methods: {
    beforeEnter(el) {
      // 指定动画开始前的初始状态
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter(el, done) {
      // 指定动画的结束状态
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        onComplete: done
      })
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.5,
        onComplete: done
      })
    }
  }
}
</script>

<style scoped>

</style>
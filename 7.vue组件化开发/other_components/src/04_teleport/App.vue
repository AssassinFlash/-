<template>
  <!--
    某些情况下，我们希望组件不是都挂载到#app这个组件树上，而是希望移动到#app之外的其他位置上，
    这时就可以通过 teleport 来完成
    teleport 有两个属性：
      to：将里面的内容移动到指定元素，可以使用选择器
      disabled：是否禁用 teleport 功能

    teleport 还可以移动组件
    如果有多个teleport，且移动到相同的元素上，那它们的内容会合并
   -->
  <teleport to="body">
    <div class="jzh">
      <h2>当前计数：{{ counter }}</h2>
      <button @click="counter++">+1</button>
    </div>
  </teleport>
</template>

<script setup>
import {ref, getCurrentInstance} from 'vue'

const counter = ref(0)
// 拿到app对象：instance.appContext
const instance = getCurrentInstance()
console.log(instance.appContext.config.globalProperties.$name)
</script>

<style scoped>

</style>
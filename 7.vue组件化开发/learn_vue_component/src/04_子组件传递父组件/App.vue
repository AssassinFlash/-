<template>
  <h2>当前计数：{{ counter }}</h2>
  <!-- 监听自定义事件，当子组件以发送自定义事件的时候父组件就能监听到，用父组件的事件函数做处理 -->
  <counter-operation @addOne="incre" @subOne="decre" @addN="increN"></counter-operation>
</template>

<script setup>
import CounterOperation from './CounterOperation.vue'
import {ref} from 'vue'

const counter = ref(100)

const incre = () => {
  counter.value++
}

const decre = () => {
  counter.value--
}

// 获取到子组件发送过来的参数
const increN = (num, name, age) => {
  counter.value += num
  console.log(name, age)
}
</script>

<style scoped>

</style>
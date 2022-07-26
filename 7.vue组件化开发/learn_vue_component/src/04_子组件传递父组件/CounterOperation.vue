<template>
  <button @click="increment">增加1</button>
  <button @click="decrement">减少1</button>

  <input type="number" v-model.number="num">
  <button @click="increN">增加n</button>
</template>

<script setup>
import {defineEmits} from "vue";
import {ref} from 'vue'

// 声明emit，自定义事件
const emit = defineEmits(['addOne', 'subOne', 'addN'])

const num = ref(0)

const increment = () => {
  // 以emit的方式发送自定义事件
  emit('addOne');
}

const decrement = () => {
  emit('subOne')
}

const increN = () => {
  // 发送自定义事件，同时传递参数
  // 可以传递不止一个参数
  emit('addN', num.value, "jzh", 18);
}
</script>

<style scoped>

</style>
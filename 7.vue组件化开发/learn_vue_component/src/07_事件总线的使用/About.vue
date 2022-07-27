<template>
  <h2>这是About组件</h2>
  <button @click="btnClick">点击about组件</button>
</template>

<script setup>
// about组件发生的事件，希望HomeContent能够监听到
import emitter from './eventBus';

const btnClick = () => {
  emitter.emit('aboutClick', "about组件点击")
}
</script>

<style scoped>

</style>
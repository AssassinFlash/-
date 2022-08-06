<template>
  <div class="counter-body">
    <h2>{{ counter }}</h2>
    <h2>{{ doubleCounter }}</h2>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
  <div class="scroll">
    <p class="scrollX">scrollX：{{ scrollX }}</p>
    <p class="scrollY">scrollY：{{ scrollY }}</p>
  </div>
</template>

<script setup>
// 抽离逻辑到js文件
import useCounter from "./hook/useCounter";
import useScroll from "./hook/useScroll";

const { counter, doubleCounter, increment, decrement } = useCounter();
const { scrollX, scrollY } = useScroll();
</script>

<style scoped>
.counter-body {
  width: 3000px;
  height: 5000px;
}

.scroll {
  width: 150px;
  height: 150px;
  background: pink;
  position: fixed;
  right: 30px;
  bottom: 30px;
  padding: 30px 0 0 30px;
}
</style>

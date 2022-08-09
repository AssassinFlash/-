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
  <div class="mouse">
    <p class="mouseX">mouseX：{{ mouseX }}</p>
    <p class="mouseY">mouseY：{{ mouseY }}</p>
  </div>
</template>

<script setup>
// 抽离逻辑到js文件
import { useCounter, useScroll, useMouse } from "./hook";

const { counter, doubleCounter, increment, decrement } = useCounter();
const { scrollX, scrollY } = useScroll();
const { mouseX, mouseY } = useMouse();
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

.mouse {
  width: 150px;
  height: 150px;
  background: orange;
  position: fixed;
  right: 30px;
  bottom: 50%;
  padding: 30px 0 0 30px;
}
</style>

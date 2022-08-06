<template>
  <home />
  <button @click="age++">添加</button>
</template>

<script setup>
import Home from "./Home.vue";
import { provide, ref, readonly } from "vue";

const name = ref("jzh");
const age = ref(25);

// 使用只读函数 readonly 对要传的数据做一个包裹，这样子组件就不能随意修改父组件传来的值，符合单向数据流的原则
provide("name", readonly(name));
provide("age", readonly(age));
</script>

<style scoped></style>

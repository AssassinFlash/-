<template>
  <h2>{{ name }} - {{ age }}</h2>
  <button @click="changeAge">修改年龄</button>
</template>

<script setup>
// 这时可以引入 toRefs 这个函数，它会帮我们将数据用ref创建，变成响应式
import { reactive, toRefs, toRef } from "vue";

const info = reactive({ name: "jzh", age: 25 });

// 传入的对象必须是reactive对象
// 1. toRefs：将reactive对象的所有属性转成ref，建立连接
// let { name, age } = toRefs(info);
const changeAge = () => {
  info.age++;
};

// 2. toRef：只转换其中一个属性
let { name } = info;
let age = toRef(info, 'age')
</script>

<style scoped></style>

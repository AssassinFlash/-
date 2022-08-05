<template>
  <h2 ref="title">{{ name }} - {{ age }}</h2>
  <button @click="changeName">修改name</button>
  <button @click="changeAge">修改age</button>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const name = ref("jzh");
const age = ref(25);
const title = ref(null);

const changeName = () => (name.value = "kobe");
// const changeAge = () => {
//   age.value++
//   if (age.value >= 35) {
//     stop();
//   }
// };

// watchEffect：自动收集响应式依赖
// 回调函数会在加载页面的时候就自动执行一次，目的是为了判断有哪些数据用到了，并收集这些数据的响应式依赖
// 这里用到了name数据，所以watchEffect自动收集了name数据的响应式依赖
// watchEffect(() => {
//   console.log("name: " + name.value);
// });

// watchEffect 会返回stop停止监听函数，调用该函数会停止收集这些数据的响应式依赖，也就是停止监听
// const stop = watchEffect(() => {
//   console.log("name: " + name.value + " age: " + age.value);
// });

// watchEffect 除了接受一个回调函数外，还有第二个参数：对象，这里用到flush，它用来指定回调函数的执行时机
// 默认情况下，回调函数会立即执行，但是如果想要让它延迟一小会，比如这里的title，想等元素挂载完之后再执行回调
watchEffect(
  () => {
    console.log(title.value);
  },
  { flush: "post" }
);
</script>

<style scoped></style>

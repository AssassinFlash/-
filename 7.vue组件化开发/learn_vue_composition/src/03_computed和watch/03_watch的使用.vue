<template>
  <h2>{{ info.name }} - {{ info.age }}</h2>
  <button @click="changeName">修改名字</button>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const info = reactive({
  name: "jzh",
  age: 25,
});
const name = ref("jzh");
const changeName = () => (info.name = "kobe");

// watch和watchEffect的不同：
// watch需要指定侦听特定的数据，且默认情况下不会立即执行回调，只有当侦听的数据发生变化时才执行回调
// watch的回调会传过来两个参数，newValue和oldValue，这是侦听数据变化前后的值

// 用法1：watch侦听一个getter函数，这个函数引用了可响应式对象
watch(
  () => info.name,
  (newVal, oldVal) => {
    console.log(newVal);
  }
);

// 用法2：watch侦听一个可响应式的对象
// 情况1：若侦听源是reactive对象，那么拿到的newVal和oldVal都是reactive对象
// watch(info, (newVal, oldVal) => {
//   console.log(newVal);
// });
// 如果不希望newVal和oldVal是reactive对象，可以将侦听源变成getter：用法类似于侦听一个getter函数
watch(
  () => {
    // 在getter函数中对reactive对象进行解构
    return { ...info };
  },
  (newVal, oldVal) => {
    console.log(newVal);
  }
);

// 情况2：若侦听源是ref对象，那么拿到的newVal和oldVal是ref对象的value值
// watch(name, (newVal, oldVal) => {
//   console.log(newVal);
// });
</script>

<style scoped></style>

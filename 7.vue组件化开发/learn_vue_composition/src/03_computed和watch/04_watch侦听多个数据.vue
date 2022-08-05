<template>
  <h2>{{ info.name }} - {{ name }}</h2>
  <button @click="changeName">修改name</button>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const info = reactive({
  name: "jzh",
  age: 25,
});
const name = ref("jzh");

const changeName = () => {
  info.name = "kobe";
};

// 侦听多个数据，使用数组即可
// 这样的话newVal和oldVal也变成了数组，下标与侦听源一一对应
// watch([info, name], (newVal, oldVal) => {
//   console.log(newVal);
//   console.log(oldVal);
// });

// 也可以这样写
// 这样就能准确拿到侦听源对应的newVal和oldVal
watch([info, name], ([newInfo, newName], [oldInfo, oldName]) => {
  console.log(newInfo);
  console.log(oldInfo);
});
</script>

<style scoped></style>

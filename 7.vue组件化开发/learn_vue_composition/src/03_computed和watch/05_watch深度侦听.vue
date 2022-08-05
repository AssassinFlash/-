<template>
  <h2>{{ info.name }}</h2>
  <button @click="changeName">修改name</button>
</template>

<script setup>
import { reactive, watch } from "vue";

const info = reactive({
  name: "jzh",
  age: 25,
  job: {
    name: "前端",
  },
});

const changeName = () => {
  info.job.name = "无";
};

// 默认情况下，watch侦听响应式对象的时候，是开启了深度侦听的
// watch(info, (newInfo, oldInfo) => {
//   console.log(newInfo);
// })

// 但是，如果使用了展开运算符拿到响应式对象的数据去侦听，这时不会开启深度侦听
// 这里想要开启深度侦听，watch会接受第三个参数：配置对象
watch(
  () => {
    return { ...info };
  },
  (newVal, oldVal) => {
    console.log(newVal);
  },
  {
    // 开启深度侦听
    deep: true,
    // 第一次进来时就立即执行：
    immediate: true
  }
);
</script>

<style scoped></style>

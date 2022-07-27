<template>
  <h2>{{ message }}</h2>
</template>

<script setup>
import { onBeforeMount, ref, onUnmounted } from "vue";
import emitter from "./eventBus";

const message = ref("hello world");

onBeforeMount(() => {
  // emitter.on("aboutClick", (value) => {
  //   message.value = value;
  // });

  // 监听所有事件，但是回调函数里面就要有两个参数: type value
  // type 表示你监听事件的名字
  emitter.on("*", (type, value) => {
    console.log(type);
    console.log(value);
  });
});

onUnmounted(()=> {
  // 某些情况下我们想取消事件监听
  // 这样就可以取消所有事件的监听
  emitter.all.clear()
})
</script>

<style scoped></style>

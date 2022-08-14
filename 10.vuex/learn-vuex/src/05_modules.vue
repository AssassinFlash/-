<template>
  <h2>root的计数: {{ $store.state.rootCounter }}</h2>
  <h2>homeModule的计数: {{ $store.state.home.counter }}</h2>
  <h2>userModule的计数: {{ $store.state.user.counter }}</h2>
  <hr />
  <h2>homeModule的getters: {{ $store.getters["home/doubleHomeCounter"] }}</h2>
  <button @click="homeIncrement">home+1</button>
  <button @click="homeDecrement">home-1</button>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const homeIncrement = () => {
  // 指定特定的模块
  store.commit("home/increment");
};
const homeDecrement = () => {
  store.commit("home/decrement");
};
</script>

<style scoped></style>

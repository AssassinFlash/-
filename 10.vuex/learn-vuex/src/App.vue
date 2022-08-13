<template>
  <h2>当前计数：{{ $store.state.counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();

const increment = () => {
  store.commit("increment");
};

const decrement = () => {
  store.commit("decrement");
};
</script>

<style></style>

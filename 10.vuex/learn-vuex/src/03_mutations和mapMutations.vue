<template>
  <h2>当前计数： {{ $store.state.counter }}</h2>
  <hr />
  <button @click="setCounter">+1</button>
  <button @click="setCounter">-1</button>
</template>

<script setup>
import { useStore, mapMutations } from "vuex";

const store = useStore();
let counter = store.state.counter;

const increment = () => {
  store.commit("setCounter", ++counter);
};

const decrement = () => {
  store.commit("setCounter", --counter);
};

// mapMutations返回一个对象：{setCounter: function(){...}}
const storeMutations = mapMutations(["setCounter"]);

</script>

<style scoped></style>

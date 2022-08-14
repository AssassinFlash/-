<template>
  <h2>当前计数：{{$store.state.counter}}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()
let counter = store.state.counter

const increment = () => {
  store.dispatch('setCounterAction', ++counter).then(res => {
    console.log(res);
  })
}

const decrement = () => {
  store.dispatch('setCounterAction', --counter)
}
</script>

<style scoped>

</style>
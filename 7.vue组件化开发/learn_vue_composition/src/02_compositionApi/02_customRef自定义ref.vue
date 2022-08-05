<template>
  <input type="text" v-model="message">
  <h2>{{message}}</h2>
</template>

<script setup>
import debounceRef from './hook/useCustomRef'

const message = debounceRef("hello world")
</script>

<style scoped>

</style>
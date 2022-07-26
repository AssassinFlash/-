<template>
  <h2 class="hello">App</h2>
  <hello-world :message="message"></hello-world>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue'
import {ref} from 'vue'

const message = ref('当你收到信我还在流浪')
</script>

<style scoped>
.hello {
  color: blue;
}
</style>
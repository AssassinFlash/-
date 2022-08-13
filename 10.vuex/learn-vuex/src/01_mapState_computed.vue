<template>
  <h2>{{ sCounter }}</h2>
  <br />
  <h3>{{ storeState.counter }}</h3>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useState } from "./hooks/useState";

const store = useStore();
const sCounter = computed(() => store.state.counter);

// 封装了mapState，传的参数将会传入mapState()函数中处理
const storeState = useState(["counter"]);

console.log(storeState);
</script>

<style scoped></style>

<template>
  <h2>HomeContent</h2>
  <h2>{{ name }} - {{ age }} - {{ length }}</h2>
</template>

<!-- <script setup>
import { inject } from "vue";

// 一个一个接
// const name = inject("name");
// const age = inject("age");

// 传对象然后解构
const { name, age } = inject("provideState");
</script> -->

<script>
// vue3.0写法
export default {
  inject: ["name", "age", "length"],
};
</script>

<style scoped></style>

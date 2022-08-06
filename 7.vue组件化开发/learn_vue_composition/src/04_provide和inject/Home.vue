<template>
  <div>{{ name }} - {{ age }}</div>
</template>

<script setup>
import { inject } from "vue";

// inject 第二个参数为默认值
// 注意，不要在子孙组件中随意修改provide传来的值
// provide 的值应当在祖父组件中修改
const name = inject("name", "");
const age = inject("age");
</script>

<style scoped></style>

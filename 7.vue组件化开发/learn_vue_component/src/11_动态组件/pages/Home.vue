<template>
  <div>
    Home页
    <div @click="pageClick">{{ name }} - {{ age }}</div>
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  name: {
    type: String,
    default: "",
  },
  age: {
    type: Number,
    default: 0,
  },
});

const count = ref(0);

const emit = defineEmits(["homeClick"]);
const pageClick = () => {
  emit("homeClick");
};
</script>

<style scoped></style>

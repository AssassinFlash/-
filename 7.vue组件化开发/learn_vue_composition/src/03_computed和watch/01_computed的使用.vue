<template>
  <h2>{{fullName}}</h2>
  <button @click="changeFirstName">修改</button>
</template>

<script setup>
import { ref, computed } from "vue";

const firstName = ref("kobe");
const lastName = ref("Bryant");

// 用法1：传入getter函数
// computed的返回值就是一个ref对象
// const fullName = computed(()=> {
//   return firstName.value + lastName.value
// })

// 用法2：传入对象，该对象包含getter和setter
const fullName = computed({
  get: () => firstName.value + lastName.value,
  set: (newValue) => {
    const names = newValue.split(" ")
    firstName.value = names[0]
    lastName.value = names[1]
  },
});

const changeFirstName = () => {
  // firstName.value = "James"
  fullName.value = "coder jzh"
};
</script>

<style scoped></style>

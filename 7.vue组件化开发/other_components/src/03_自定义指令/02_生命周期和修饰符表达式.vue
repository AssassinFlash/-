<template>
  <h2>当前计数：{{ counter }}</h2>
  <!-- 修饰符和表达式都放到了bindings形参中 -->
  <button v-if="counter<2" v-jzh.aaa="'message'" @click="counter++">+1</button>
</template>

<script setup>
import {ref} from "vue";

const counter = ref(0);
const vJzh = {
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted(el, bindings, vnode, preVnode) {
    console.log("mounted");
    // modifiers: {aaa}, value: 'message'
    // console.log(bindings)
    console.log(bindings.modifiers)
    console.log(bindings.value)
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unMounted");
  },
};
</script>

<style scoped></style>


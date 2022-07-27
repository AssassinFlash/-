<template>
  <home />
  <button @click="addName">+name</button>
</template>

<!-- <script setup>
import Home from "./Home.vue";
import { ref, provide } from "vue";

const name = ref("jzh");
const age = ref(25);

// 一个一个写
// provide("name", name);
// provide("age", age);

// 直接传对象
provide('provideState', {
  name,
  age
})
</script> -->

<script>
// vue3 写法
import Home from "./Home.vue";
import { computed } from "vue";
export default {
  components: {
    Home,
  },
  // 当要使用this的时候，provide要变成函数
  // 这是因为对象没有作用域，provide{}的this找到的作用域是script，而模块化的script是没有this的，即this为undefined
  // provide(){}中，vue会自动为它绑定this，使得里面的this指向当前组件实例，这样this就能访问组件的data数据了
  provide() {
    return {
      name: "jzh",
      age: 18,
      // provide里的值是一次性绑定的，不是响应式的
      // 如果要变成响应式需要使用computed函数，让它会根据依赖的值变化而变化
      length: computed(() => this.names.length),
    };
  },
  data() {
    return {
      names: ["why", "jzh", "lmq"],
    };
  },
  methods: {
    addName() {
      this.names.push("why");
    },
  },
};
</script>

<style scoped></style>

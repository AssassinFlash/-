<template>
  <nav-bar :name="name">
    <!-- 具名插槽 -->
<!--    <template v-slot:left>-->
<!--      <span>左边</span>-->
<!--    </template>-->
    <template v-slot:right>
      <i>右边的i元素</i>
    </template>
    <template v-slot:center>
      <h2>我是标题</h2>
    </template>

    <!-- []插值语法获得name值 -->
    <template v-slot:[name]></template>

    <!--  具名插槽的简写形式：# 代替 v-slot:  -->
    <template #left>
      <span>左边的元素</span>
    </template>
  </nav-bar>
</template>

<script setup>
import NavBar from './NavBar.vue'
import {ref} from 'vue'

const name = ref("jzh")
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
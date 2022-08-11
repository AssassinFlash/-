<template>
  <div>
    <!--  a标签，表示页面跳转  -->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <!--  占位符，表示组件要显示到这个位置  -->
    <router-view/>
  </div>
</template>
<script setup></script>
<style scoped></style>

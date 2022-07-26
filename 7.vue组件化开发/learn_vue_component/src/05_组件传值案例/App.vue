<template>
  <!-- 监听子组件的自定义事件 -->
  <tab-control @pageMessage="receiveMessage"></tab-control>
  <div class="page">{{ message }}</div>
</template>

<script setup>
import TabControl from './TabControl.vue'
import {ref} from 'vue'

const message = ref('衣服')

const receiveMessage = (title) => {
  message.value = title
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;

  .page {
    height: calc(100vh - 50px);
    background: yellow;
  }
}
</style>
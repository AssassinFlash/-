<template>
  <!-- 当传递了某个属性，但这个属性在组件中并未使用props声明，这个属性就成为attribute -->
  <!-- 常见的attribute包括 class style id 等 -->
  <show-message title="哈哈哈" :content="content" class="why" id="why"></show-message>
  <show-message :title="message.title" :content="message.content"></show-message>
  <show-message v-bind="message"></show-message>
  <show-message v-bind="message1"></show-message>

  <multi-root-element id="aaa"></multi-root-element>
</template>

<script setup>
import ShowMessage from './ShowMessage.vue'
import MultiRootElement from './MultiRootElement.vue'

const content = "我是哈哈哈"
const message = {
  title: '嘿嘿嘿',
  content: "我是嘿嘿嘿"
}
const message1 = {
  title: '我是123'
}
</script>

<style scoped>

</style>
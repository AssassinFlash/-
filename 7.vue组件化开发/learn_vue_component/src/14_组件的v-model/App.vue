<template>
  <!--  <input type="text" v-model="message">-->
  <!--  <input type="text" :value="message" @input="message = $event.target.value">-->

  <!-- 组件上使用v-model -->
  <!--  <hy-input v-model="message"></hy-input>-->
  <!-- 实际上做了这两步：传modelValue值给子组件，监听udpate:modelValue事件，并将子组件传来的值赋给message -->
  <!-- 自定义的数据是$event，input拿数据是$event.target.value -->
  <!--  <hy-input :model-value="message" @update:model-value="message = $event"></hy-input>-->

  <!-- 组件上绑定两个v-model -->
  <hy-input v-model:title1="message1" v-model:title2="message2"></hy-input>
</template>

<script>
import HyInput from "./HyInput.vue";

export default {
  components: {
    HyInput
  },
  data() {
    return {
      message: "组件上使用v-model",
      message1: "hello",
      message2: "world"
    }
  }
}
</script>

<style scoped>

</style>
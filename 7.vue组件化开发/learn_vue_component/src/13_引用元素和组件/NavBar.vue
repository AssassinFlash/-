<template>
  <h2>我是navbar</h2>
  <button @click="btnClick">navbar拿到父组件</button>
</template>

<script>
export default {
  data() {
    return {
      message: "我是navbar中的message"
    }
  },
  methods: {
    sayHello() {
      console.log("hello navbar")
    },
    btnClick() {
      console.log(this.$parent)
    }
  }
}
</script>

<style scoped>

</style>
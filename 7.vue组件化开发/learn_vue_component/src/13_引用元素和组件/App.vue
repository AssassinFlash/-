<template>
  <!-- 绑定到元素上 -->
  <h2 ref="title">hahahha</h2>
  <button @click="btnClick">点击按钮</button>

  <!-- 绑定到组件上 -->
  <nav-bar ref="navbar"></nav-bar>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
  components: {
    NavBar
  },
  data() {
    return {}
  },
  methods: {
    btnClick() {
      // this即为当前组件实例
      console.log(this);
      // 拿到dom对象
      // console.log(this.$refs.title)
      // 拿到组件实例
      // console.log(this.$refs.navbar)
      // 拿到组件实例里的数据
      console.log(this.$refs.navbar.message)
      // 调用组件实例的方法
      this.$refs.navbar.sayHello()
    }
  },
}
</script>

<style scoped>

</style>
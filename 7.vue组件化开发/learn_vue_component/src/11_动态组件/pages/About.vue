<template>
  <div>
    About页
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      count: 0
    };
  },
  // 针对缓存组件的生命周期函数
  // activated 和 deactivated
  // 这是因为组件被keep-alive缓存了之后，组件的created只执行一次，而unmounted都不会执行
  activated() {
    console.log('进入了about页')
  },
  deactivated() {
    console.log('退出了about页')
  }
};
</script>

<style scoped></style>

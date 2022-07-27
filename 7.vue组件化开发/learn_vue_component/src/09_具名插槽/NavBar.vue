<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <!-- 一个不带name的slot，它会隐式的带有名字，名为default -->
    <!--    <slot></slot>-->

    <!-- 还可以绑定slot的name属性，使其动态变化 -->
    <slot :name="name"></slot>
  </div>
</template>

<script setup>
// 使slot的name由父组件来决定
defineProps({
  name: String
})
</script>

<style lang="less" scoped>
.nav-bar {
  height: 100px;
  display: flex;
  align-items: center;

  .left {
    width: 80px;
    height: 80px;
    background: orange;
  }

  .right {
    width: 80px;
    height: 80px;
    background: yellow;
  }

  .center {
    flex: 1;
    height: 80px;
    background: pink;
  }
}
</style>
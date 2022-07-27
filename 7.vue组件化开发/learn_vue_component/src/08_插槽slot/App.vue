<template>
<!--  <my-slot-cpn>-->
<!--    <h2>Hello world</h2>-->
<!--  </my-slot-cpn>-->

<!--  &lt;!&ndash; 插槽里面也可以插入组件 &ndash;&gt;-->
<!--  <my-slot-cpn>-->
<!--    <my-button></my-button>-->
<!--  </my-slot-cpn>-->

<!--  <my-slot-cpn></my-slot-cpn>-->

  <!-- 这种情况下，所有slot都会有下面这些html代码 -->
  <!-- 这是我们不希望看到的 -->
  <my-slot-cpn>
    <h2>哈哈哈</h2>
    <button>我是按钮</button>
    <my-button></my-button>
  </my-slot-cpn>

</template>

<script setup>
import MySlotCpn from './MySlotCpn.vue';
import MyButton from './MyButton.vue'
</script>

<style scoped>

</style>
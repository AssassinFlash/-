<template>
  <!--
    编译作用域的概念：
    父组件的data若没有传值给子组件，就只能在父组件中查看
    子组件的data若没有传给父组件，就只能在子组件中查看
   -->
  <!--
    作用域插槽：
    在slot里通过绑定属性值传给父组件
    父组件通过v-slot="xxx"获取到对象，通过xxx.绑定的属性值拿到子组件传给父组件的数据
   -->
  <template v-for="(item, index) in names" :key="item">
    <slot :item="item" :index="index"></slot>

    <!--  假如插槽有名字，配合作用域插槽一起使用  -->
    <slot name="jzh" :item="item" :index="index"></slot>
  </template>
</template>

<script setup>
defineProps({
  names: {
    type: Array,
    default() {
      return []
    }
  }
})
</script>

<style scoped>

</style>
<template>
  <!-- 传值给子组件 -->
  <!-- 通过v-slot="xxx"获取到子组件传给父组件的属性值，它是一个对象，通过xxx.绑定的属性值拿到数据 -->
  <!--  <child-cpn :names="names">-->
  <!--    &lt;!&ndash;  默认插槽名是default，那么还可以进行一下缩写：  &ndash;&gt;-->
  <!--    <template v-slot="slotProps">-->
  <!--      <button>{{ slotProps.item }} - {{ slotProps.index }}</button>-->
  <!--    </template>-->
  <!--  </child-cpn>-->
  <!-- 但是这种写法只能是当子组件有且只有一个slot的时候才能这样使用 -->
  <!-- 如果还有其他插槽，那么默认插槽也必须使用template的方式来编写 -->
  <child-cpn :names="names" v-slot="slotProps">
    <button>{{ slotProps.item }} - {{ slotProps.index }}</button>
  </child-cpn>

  <child-cpn :names="names">
    <!--  假如插槽是具名插槽  -->
    <!--  template就不能省略  -->
    <template v-slot:jzh="coderjzh">
      <div>{{ coderjzh.item }} = {{ coderjzh.index }}</div>
    </template>
  </child-cpn>
</template>

<script setup>
import ChildCpn from './ChildCpn.vue'
import {ref} from 'vue'

const names = ref(['jzh', 'kobe', 'james', 'curry'])
</script>

<style scoped>

</style>
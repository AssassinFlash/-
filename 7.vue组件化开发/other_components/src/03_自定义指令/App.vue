<template>
  <input type="text" v-focus>
</template>

<!-- 当需要对DOM元素做底层操作的时候，可以使用自定义指令 -->
<!-- 在setup语法糖里，以vName来指定自定义指令的名字，可在模板中直接使用 -->
<script setup>
const vFocus = {
  mounted(el) {
    el.focus()
  }
}
</script>

<style scoped>

</style>
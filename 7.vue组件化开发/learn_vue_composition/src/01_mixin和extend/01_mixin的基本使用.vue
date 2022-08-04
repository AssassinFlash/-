<template>
  <div>
    {{ message }}
  </div>
  <button @click="handleClick">显示信息</button>
</template>

<script>
import demoMixin from "./mixin/demoMixin";
export default {
  mixins: [demoMixin]
};
</script>

<style scoped></style>

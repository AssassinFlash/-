<template>
  <h2 class="hello-world">{{ message }}</h2>
</template>

<script setup>

defineProps({
  message: {
    type: String,
    default: "那年的约定都放在心上"
  }
})
</script>

<style scoped>
.hello-world {
  color: pink;
}
</style>
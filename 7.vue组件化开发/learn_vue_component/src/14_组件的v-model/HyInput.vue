<template>
  <!--  <button @click="changeValue">点击</button>-->
  <!--  <input type="text" :value="modelValue" @input="changeValue">-->

  <!-- 可以使用v-model简写，但是不能=props传来的值，因为这个值不能随便修改 -->
  <!-- 可以使用计算属性的setter和getter，因为v-model的原理就是绑定和监听 -->
  <!-- 绑定值就触发了getter，监听就触发了setter -->
  <!--  <input type="text" v-model="hyValue">-->
  <!--  <h2>{{ modelValue }}</h2>-->

  <!-- 使用两个v-model -->
  <input type="text" v-model="message1">
  <input type="text" v-model="message2">
  <h2>{{ title1 }}</h2>
  <h2>{{ title2 }}</h2>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "HyInput"
    },
    // 这里传来了两个值
    title1: String,
    title2: String
  },
  // 这里自定义了两个事件
  emits: ['update:modelValue', 'update:title1', 'update:title2'],
  computed: {
    hyValue: {
      get() {
        // 通过getter，就可以返回props的值了
        return this.modelValue
      },
      set(value) {
        // 值改变的时候触发监听，监听把自定义事件发布出去
        this.$emit('update:modelValue', value)
      }
    },
    message1: {
      get() {
        return this.title1
      },
      set(value) {
        this.$emit('update:title1', value)
      }
    },
    message2: {
      get() {
        return this.title2
      },
      set(value) {
        this.$emit('update:title2', value)
      }
    }
  },
  methods: {
    changeValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
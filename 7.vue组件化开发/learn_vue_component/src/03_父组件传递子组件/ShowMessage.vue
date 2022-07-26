<template>
  <div>
    <!-- 通过$attrs获取attribute值 -->
    <h2 :class="$attrs.class" :id="$attrs.id">{{ title }}</h2>
    <h3>{{ content }}</h3>
  </div>
</template>

<script setup>
import {useAttrs} from "vue";
// defineProps(['title', 'content'])
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "过去的背包就留在异乡",
  },
  // 当传值是引用类型的时候，要注意修改一个地方会影响到其他地方使用的组件的值
  // 因此要使用工厂函数，每次执行default函数都会返回一个新的对象
  info: {
    type: Object,
    default() {
      return {
        name: "jzh",
      };
    },
  },
});

// 通过useAttrs来获取attribute值
const attrs = useAttrs();
console.log(attrs);
</script>

<style scoped></style>

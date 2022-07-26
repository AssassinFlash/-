<template>
  <ul>
    <template v-for="(title, index) in titles" :key="title">
      <li
        :class="{ active: currentIndex === index }"
        @click="changePage(title, index)"
      >
        {{ title }}
      </li>
    </template>
  </ul>
</template>

<script setup>
import { ref } from "vue";

// 声明自定义事件
const emit = defineEmits(["pageMessage"]);

const titles = ref(["衣服", "鞋子", "家电"]);
const currentIndex = ref(0);

const changePage = (title, index) => {
  currentIndex.value = index;
  // 发送自定义事件，传递参数
  emit("pageMessage", title);
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;
  height: 50px;
  background: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    padding: 13px 20px;

    &.active {
      border-bottom: 2px solid crimson;
    }
  }
}
</style>

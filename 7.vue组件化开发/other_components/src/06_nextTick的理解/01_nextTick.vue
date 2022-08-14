<template>
  <h2 class="title" ref="h2">{{ message }}</h2>
  <button @click="addMessage">添加内容</button>
</template>

<script setup>
import { nextTick, ref } from "vue";

const message = ref("");
const height = ref(0);
const h2 = ref(null);

// 需求：在添加内容的时候计算元素的高度
// 可以看到，在第一次获取元素高度的时候，height = 0，这显然是不对的，元素已经被添加了内容，高度不可能为0
// 所以这里获取的是元素更改之前的高度，不符合需求
const addMessage = () => {
  message.value += "哈哈哈";
  // height.value = h2.value.offsetHeight;
  // console.log(height.value);

  // 获取元素高度需要在更新DOM之后再调用：nextTick
  // nextTick里面的回调会推迟到更新了DOM之后再执行，这时拿到的就是正确的被添加内容之后的元素的高度
  // nextTick的实现原理：内部回调用promise包裹，而promise是异步任务中的微任务
  // nextTick将这个回调放到微任务队列的最后，等待前面所有的组件更新等的微任务完成之后再从微任务队列中调出该回调函数执行
  nextTick(() => {
    height.value = h2.value.offsetHeight;
    console.log(height.value);
  });
};
</script>

<style scoped>
.title {
  width: 120px;
}
</style>

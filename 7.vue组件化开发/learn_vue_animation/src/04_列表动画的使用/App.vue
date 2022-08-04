<template>
  <button @click="addNum">添加数字</button>
  <button @click="removeNum">删除</button>
  <button @click="shuffleNum">数字洗牌</button>

  <!--
    transition-group的特点：
      - mode不可用
      - 内部元素需要提供一个key值
      - 新增 .v-move 的class完成动画，它会在元素改变位置的时候调用
   -->
  <transition-group tag="p" name="jzh">
    <template v-for="item in numbers" :key="item">
      <span class="item">{{ item }}</span>
    </template>
  </transition-group>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberCount: 10
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length)
    },
    addNum() {
      this.numbers.splice(this.randomIndex(), 0, this.numberCount++)
    },
    removeNum() {
      this.numbers.splice(this.randomIndex(), 1)
    },
    shuffleNum() {
      this.numbers = _.shuffle(this.numbers)
    }
  }
}
</script>

<style scoped>
.item {
  /* 默认的行内元素不能做很多涉及高宽度的操作以及位移 */
  /* 所以要转成inline-block */
  display: inline-block;
  margin-right: 10px;
}

.jzh-enter-from, .jzh-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.jzh-enter-to, .jzh-leave-from {
  transform: translate(0);
  opacity: 1;
}

.jzh-enter-active, .jzh-leave-active {
  transition: all 0.5s ease;
}

/* 解决移除元素时其他元素不移动的bug */
.jzh-leave-active {
  /* 设置了绝对定位之后，该元素被移除时就会脱离标准流，其他元素就不会因为这个元素占据位置而不移动 */
  position: absolute;
}

/* 新增的 .v-move class */
.jzh-move {
  transition: all 0.5s ease;
}
</style>
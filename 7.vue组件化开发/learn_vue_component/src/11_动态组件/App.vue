<template>
  <template v-for="page in pages" :key="page">
    <button @click="changePage(page)" :class="{ active: page === currentPage }">
      {{ page }}
    </button>
  </template>

  <!-- 2. 动态组件 -->
  <!-- 传值 -->
  <!-- 在切换组件后, 原来的组件会被销毁掉, 再次切换回来时则重新创建组件-->
  <!-- 某些情况下, 我们希望保持组件的状态不被销毁, 这就是 keep-alive 的作用 -->
  <!-- keep-alive 的一些属性值：include 只有名称匹配的组件被缓存 -->
  <!-- exclude 名称匹配的组件不被缓存 -->
  <!-- 用逗号分割字符串, 注意不要加空格, 匹配是根据组件的name属性进行匹配的 -->
  <keep-alive include="About">
    <component
      :is="currentPage"
      name="jzh"
      :age="25"
      @homeClick="handleClick"
    ></component>
  </keep-alive>

  <!-- 1. v-if 实现 -->
  <!-- <template v-if="currentPage === 'home'">
    <home />
  </template>

  <template v-else-if="currentPage === 'category'">
    <category />
  </template>

  <template v-else>
    <about />
  </template> -->
</template>

<script>
import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    Category,
    About,
  },
  data() {
    return {
      pages: ["home", "category", "about"],
      currentPage: "home",
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    handleClick() {
      console.log("homeClick");
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>

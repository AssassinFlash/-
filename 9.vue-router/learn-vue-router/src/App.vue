<template>
  <div>
    <!--  a标签，表示页面跳转  -->
    <!-- active-class 属性：设置激活a元素后应用的class -->
    <!--    <router-link to="/home" active-class="active">Home</router-link> -->
    <!--  当你什么都不写的时候，默认就是有个active类，为router-link-active  -->

    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/user/jzh/id/123">User</router-link> -->
    <!-- 可以这样传参 -->
    <router-link :to="{ name: 'user', params: { username: 'jzh', id: 123 } }">
      User
    </router-link>
    <router-link to="/category">Category</router-link>

    <!--  占位符，表示组件要显示到这个位置  -->
    <!-- 插槽形式的写法 -->
    <!-- 
      作用域插槽：带数据的插槽，即带参数的插槽，简单的来说就是子组件给父组件提供参数，该参数仅限于插槽中使用，
      父组件可根据子组件传来的插槽数据来进行不同方式的展现和填充插槽内容
     -->
    <!-- 对路由做过渡动画 -->
    <router-view v-slot="{ Component }">
      <transition name="coder">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script setup></script>
<style scoped>
/*.active {*/
/*  color: red;*/
/*}*/

.router-link-active {
  color: red;
}

.coder-enter-from,
.coder-leave-to {
  opacity: 0;
}
.coder-enter-to,
.coder-leave-from {
  opacity: 1;
}

.coder-enter-active,
.coder-leave-active {
  transition: opacity 0.5s ease;
}
</style>

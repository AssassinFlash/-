<template>
  <div>
    App组件
    <home />
    <!-- <AsyncCpn /> -->

    <!-- 异步组件还可以通过和suspense一起使用 -->
    <suspense>
      <!-- 在默认插槽中, 显示异步组件 -->
      <template #default>
        <async-cpn></async-cpn>
      </template>
      <!-- 当异步组件无法显示或者还未加载完成时, 显示fallback插槽 -->
      <template #fallback>
        <loading />
      </template>
    </suspense>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Loading from './Loading.vue'
import { defineAsyncComponent } from "vue";

// 异步组件的好处：将代码分包，使得打包后的app.js不再那么臃肿，等到需要用到的时候才加载进来
// 主要用到的原理：import()函数是一个promise，调用.then()才加载
// 提升了首屏加载的速度

// 通过异步的方式来进行加载：defineAsyncComponent()
// 它接收一个promise函数，正好import()是个promise
// 实现机制和webpack的分包机制是一样的，都是利用了import()函数的promise，在它调用.then()方法的时候再请求该组件
// const AsyncCpn = defineAsyncComponent(() => import("./AsyncCpn.vue"));

// 异步组件的第二种写法：defineAsyncComponent()也接收一个对象，对象上可以写一些配置
const AsyncCpn = defineAsyncComponent({
  // 同样是接收import()函数返回的promise，它会自动调用.then()方法
  loader: () => import('./AsyncCpn.vue'),
  // 在上面组件未加载完毕的时候，会显示下面的这个组件
  loadingComponent: Loading,
  // 在显示Loading组件之前，等待多长时间
  delay: 2000
})
export default {
  components: {
    Home,
    AsyncCpn,
    Loading
  },
};
</script>

<style lang="less" scoped></style>

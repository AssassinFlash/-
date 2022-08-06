<script>
// vue组件中需要导出一个对象
// 这个对象会调用render()函数
// render()函数用于将模板编译成vnode，一个个vnode组成了虚拟dom
// render()函数返回vnode，而render()函数会调用h()函数
// h()函数即createVnode()的缩写，也就是说h()函数会返回vnode
// 所以流程为：render()函数通过调用h()函数将模板template编译成vnode
import { h } from "vue";
export default {
  // 事实上，有没有模板，这个对象都会调用render()函数
  render() {
    // 这样就相当于在模板上写了<h2>xxx</h2>
    return h("h2", null, "hello vue高级");
  },
};
</script>

<style scoped></style>

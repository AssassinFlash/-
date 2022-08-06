<script>
import { h } from "vue";
export default {
  // setup函数可以代替render函数来实现同样的效果，只需要return这里从返回一个对象变成返回一个函数
  // 返回的这个函数就是render函数
  setup(props, { slots }) {
    return () => {
      // 调用插槽函数
      return slots.default
        ? slots.default()
        : h("h2", null, "我是helloworld组件");
    };
  },
};
</script>

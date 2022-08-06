<script>
import { h, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    return {
      counter,
    };
  },

  // setup函数没有绑定this，但是render()函数是有绑定this的
  // 也就是说，render()里面是可以通过this来获取组件实例
  render() {
    // 当div元素有子元素时，使用数组
    return h("div", null, [
      h("h2", null, `当前技术：${this.counter}`),
      h(
        "button",
        {
          // 中间位置写方法绑定或者属性
          onClick: () => this.counter++,
        },
        "+1"
      ),
      h(
        "button",
        {
          onClick: () => this.counter--,
        },
        "-1"
      ),
    ]);
  },
};
</script>

<script>
import Helloworld from "./Helloworld.vue";
import { h } from "vue";
export default {
  render() {
    return h(Helloworld, null, {
      // 定义插槽
      default: (props) => h("h3", null, "我是app组件的hello world"),
    });
  },
};
</script>

<script>
import Home from "./Home.vue";
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);

    const increment = () => counter.value++;
    const decrement = () => counter.value--;
    return {
      counter,
      increment,
      decrement,
    };
  },
  render() {
    // jsx语法
    // 使用插槽，先是{}表示要传个对象
    return (
      <div>
        <h2>当前计数：{this.counter}</h2>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <Home>
          {{
            default: (props) => {
              return <h2>我是APP组件</h2>;
            },
          }}
        </Home>
      </div>
    );
  },
};
</script>

<style scoped></style>

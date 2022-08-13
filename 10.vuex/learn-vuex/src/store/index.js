import { createStore } from "vuex";

// store的核心原理：将数据从组件内部抽离开，以一个全局的单例来管理
// 这样当多个组件都需要使用同一个数据的时候，就不需要组件之间传来传去，
// 而是直接在状态管理这里拿到数据进行处理即可
// vuex里面所有的数据都是响应式的
const store = createStore({
  state() {
    return {
      counter: 100,
      books: [
        { name: "深入Vue", price: 200, num: 3 },
        { name: "深入Webpack", price: 300, num: 4 },
      ],
      discount: 0.6,
    };
  },
  // getters 类似于 computed ，计算依赖于state的数据
  getters: {
    // 接受两个参数，第一个是state，第二个是getter，方便从getter中拿到数据进行计算
    stateCounter(state) {
      return state.counter;
    },
    totalPrice(state, getters) {
      // 可以在一个getter里面调用另一个getter
      return state.books.reduce((p, c) => {
        return p + c.price * c.num * getters.currDiscount;
      }, 0);
    },
    currDiscount(state) {
      return state.discount * 0.9;
    },
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export default store;

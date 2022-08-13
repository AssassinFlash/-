import { createStore } from "vuex";

// store的核心原理：将数据从组件内部抽离开，以一个全局的单例来管理
// 这样当多个组件都需要使用同一个数据的时候，就不需要组件之间传来传去，
// 而是直接在状态管理这里拿到数据进行处理即可
// vuex里面所有的数据都是响应式的
const store = createStore({
  state() {
    return {
      counter: 100,
    };
  },
  getters: {
    stateCounter(state) {
      return state.counter;
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

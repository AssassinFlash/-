const homeModule = {
  // 开启命名空间，使每个模块变得独立
  namespaced: true,
  state() {
    return {
      counter: 100,
    };
  },
  getters: {
    // 模块里面的getter除了state，getters，还有第三个参数rootState，即拿到根store的state，还有第四个参数rootGetters
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.counter * 2;
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
  actions: {
    // 模块里的action的context有6个参数：
    incrementAction({
      commit,
      dispatch,
      state,
      rootState,
      getters,
      rootGetters,
    }) {
      commit("increment");
      // 对根的mutation做提交：
      // 第二个参数为payload传参，第三个参数则指定是否要对root做处理
      commit("increment", null, { root: true });
    },
  },
};

export default homeModule;

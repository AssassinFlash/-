import { createStore } from "vuex";
import homeModule from "./module/home";
import userModule from "./module/user";

const store = createStore({
  // 将store切割成模块，每个模块拥有自己的state、mutation、actions、getters
  modules: {
    home: homeModule,
    user: userModule,
  },
  state() {
    return {
      rootCounter: 100,
    };
  },
  mutations: {
    increment(state) {
      state.rootCounter++;
    },
    decrement(state) {
      state.rootCounter--;
    },
  },
});

export default store;

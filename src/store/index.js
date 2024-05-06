import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 0,
    };
  }, 
  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },
  },
});

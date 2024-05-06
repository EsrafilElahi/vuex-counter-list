import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 0,
      favNums: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    decrement(state) {
      state.count--;
    },

    setFavNums(state, n) {
      state.favNums.push(n);
    },

    clearFavNums(state) {
      state.favNums = [];
    },
  },
});

export default {
  state: {
    message: "hello vuex",
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    setMessage({ commit }, payload) {
      commit("setMessage", payload);
    },
  },
};

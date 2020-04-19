export default {
  state: {
    task: "",
  },
  getters: {
    TASK: (state) => state.task,
  },
  mutations: {
    SET_TASK: (state, payload) => (state.task = payload),
  },
  actions: {},
};

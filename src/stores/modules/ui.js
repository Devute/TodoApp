export default {
  state: {
    drawer: false,
    notesModal: false,
    notification: {
      display: false,
      message: "this is a dummy text",
      class: "success",
      timeout: 3000,
    },
  },
  getters: {
    DRAWER: (state) => state.drawer,
    NOTIFICATION: (state) => state.notification,
    NOTESMODAL: state => state.notesModal,
  },
  mutations: {
    SET_DRAWER: (state, payload) => (state.drawer = payload),
    SET_NOTIFICATION: (state, { display, message, alertClass }) => {
      state.notification.display = display;
      state.notification.message = message;
      state.notification.class = alertClass;
    },
    SET_NOTESMODAL: (state, payload) => state.notesModal = payload,
  },
  actions: {},
};

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
        list_search_bar: false,
        render_task: false,
        edit_title_bar: true,
        task_search_bar: true,
        task_bar: true,
    },
    getters: {
        DRAWER: (state) => state.drawer,
        NOTIFICATION: (state) => state.notification,
        NOTESMODAL: state => state.notesModal,
        listSearchBar: state => state.list_search_bar,
        renderTask: state => state.render_task,
        editTitleBar: state => state.edit_title_bar,
        taskSearchBar: state => state.task_search_bar,
        taskBar: state => state.task_bar,

    },
    mutations: {
        SET_DRAWER: (state, payload) => (state.drawer = payload),
        SET_NOTIFICATION: (state, {display, message, alertClass}) => {
            state.notification.display = display;
            state.notification.message = message;
            state.notification.class = alertClass;
        },
        SET_NOTESMODAL: (state, payload) => state.notesModal = payload,
        Set_listSearchBar: (state, payload) => state.list_search_bar = payload,
        Set_renderTask: (state, payload) => state.render_task = payload,
        Set_editTitleBar: (state, payload) => state.edit_title_bar = payload,
        Set_taskSearchBar: (state, payload) => state.task_search_bar = payload,
        Set_taskBar: (state, payload) => state.task_bar = payload
    },
    actions: {},
};

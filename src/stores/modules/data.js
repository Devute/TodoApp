import axios from "axios";

export default {
    state: {
        sort_by: null,
        filter_by: null,
        token: localStorage.getItem("access_token") || null,
        searched_list: [],
        list_search_data: false,
        task_search: false,
        searched_task: [],
        background: "",

    },
    getters: {
        loggedIn:state => {
            return state.token !== null;
        },
        sortBy:state => state.sort_by,
        filterBy: state => state.filter_by,
        token: state => state.token,
        listSearchData: state => state.list_search_data,
        searchedList: state => state.searched_list,
        taskSearch: state => state.task_search,
        searchedTask: state => state.searched_task,
        background: state => state.background,

    },
    mutations: {
        Set_sortBy: (state, payload) => state.sort_by = payload,
        Set_filterBy: (state, payload) => state.filter_by = payload,
        set_token: (state, payload) => state.token = payload,
        destroy_token: state => state.token = null,
        Set_listsearchdata: (state, payload) => state.list_search_data = payload,
        Set_searchedList: (state, payload) => state.searched_list = payload,
        Set_task_search: (state, payload) => state.task_search = payload,
        Set_searchedTask: (state, payload) => state.searched_task = payload,
        Set_background: (state, payload) => state.background = payload,
    },
    actions: {
        set_token({commit}, credatials){
            return new Promise((resolve, reject) => {
                axios.post('login', {
                    username: credatials.username,
                    password: credatials.password,
                }).then(response =>{
                    const token = response.data.access_token;
                    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
                    localStorage.setItem("access_token",token );
                    commit("set_token", token);
                    resolve(response);
                }).catch(error =>{
                    console.log(error);
                    reject(error);
                })
            })
        },
        destroyToken({commit}){
            return new Promise((resolve, reject) => {
                axios.post('logout')
                    .then((response) =>{
                        localStorage.removeItem("access_token" );
                        commit("destroy_token");
                        resolve(response)
                }).catch(error =>{
                    // localStorage.removeItem("access_token" );
                    // commit("destroy_token");
                    console.log(error);
                    reject(error);
                })
            })

        }
    },
};

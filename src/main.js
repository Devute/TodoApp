import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import {Plugin} from "vue-fragment";
import "vuetify/dist/vuetify.min.css";
import store from "./stores/stores";
import App from "./App.vue";
import router from "./routes.js";
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(Plugin);
axios.defaults.baseURL = "http://todo-app.test/api/v1/";
axios.defaults.headers.common["Authorization"] = "Bearer " + store.getters.token;

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVistor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.getters.loggedIn) {
            next({
                name: 'todo',
            })
        } else {
            next()
        }
    }
    else {
        next() // make sure to always call next()!
    }
});

new Vue({
    vuetify,
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");

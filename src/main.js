import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import { Plugin } from "vue-fragment";
import "vuetify/dist/vuetify.min.css";
import store from "./stores/stores";
import App from "./App.vue";
import router from "./routes.js";
import axios from 'axios';
Vue.config.productionTip = false;

Vue.use(Plugin);
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

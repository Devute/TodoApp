import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import UIModule from "./modules/ui.js";
import Data from "./modules/data.js";
import { Todo, Task, Note } from "./classes/TodoData/TodoData.js";
import User from "./classes/User";
Vue.use(Vuex);

// Create a new instance of Database.
const database = new VuexORM.Database();
database.register(User);
database.register(Todo);
database.register(Task);
database.register(Note);
export default new Vuex.Store({
  modules: {
    ui: UIModule,
    Data,
  },
  plugins: [VuexORM.install(database)],
});

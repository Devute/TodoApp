import Vue from "vue";
import axios from 'axios'
import Vuex from "vuex";
import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'
import VuexORMSearch from '@vuex-orm/plugin-search';
import UIModule from "./modules/ui.js";
import Data from "./modules/data.js";
import {Todo, Task, Note} from "./classes/TodoData/TodoData.js";
import User from "./classes/User";

Vue.use(Vuex);
VuexORM.use(VuexORMAxios, {
    axios,
});

VuexORM.use(VuexORMSearch, {
    // Configure default fuse.js options here (see "Configuration" section below).
});
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

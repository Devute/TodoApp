import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Auth/LogIn";
import Logout from "./components/Auth/Logout";
import Signup from "./components/Auth/Signup";
import Tasks from "./components/Tasks";
import Todo from "./components/Todo";
import notesModal from "./components/notesModal";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Todo,
        name: "todo",
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/list/:todoId",
                components: {tasks: Tasks},
                name: "tasks",
                meta: {
                    requiresAuth: true,
                },
                children: [
                    {
                        path: "/list/:todoId/task/:taskId",
                        components: {notes: notesModal},
                        name: "notes",
                        meta: {
                            requiresAuth: true,
                        },
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: {
            requiresVisitor: true,
        },
    },
    {
        path: "/logout",
        component: Logout,
        name: "logout",
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/signup",
        component: Signup,
        name: "signup",
        meta: {
            requiresVisitor: true,
        },
    },

];



export default new VueRouter({
    mode: "history",
    routes,
    base: "/",
});


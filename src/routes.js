import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Auth/LogIn";
import Signup from "./components/Auth/Signup";
import Tasks from "./components/Tasks";
import Todo from "./components/Todo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Todo,
    name: "todo",
    children: [
      {
        path: "/list/:id",
        components: { tasks: Tasks },
        name: "tasks",
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/signup",
    component: Signup,
    name: "signup",
  },
];
export default new VueRouter({
  mode: "history",
  routes,
  base: "/",
});

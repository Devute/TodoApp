<template>
  <v-card style="width:100%; height:100%;  overflow:hidden !important">
    <v-toolbar color="blue" dark>
      <v-card-title>Your Lists</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item ripple @click="ToggleTodo()" v-if="!ToggleTodoInput">
        <v-list-item-title style="color:#2196f3">Create New Lists</v-list-item-title>
        <v-list-item-action>
          <v-icon>add</v-icon>
        </v-list-item-action>
      </v-list-item>
      <v-flex v-else>
        <v-form ref="form" @submit.prevent="addTodo()">
          <v-text-field
            solo
            label="Create New Todo List"
            hide-details
            append-icon="add"
            @blur="ToggleTodo()"
            v-model.trim="form.Todo"
            autofocus
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-list>

    <v-divider></v-divider>
    <v-list style="height: calc(100% - 128px); overflow-y: scroll !important">
      <v-list-item
        :to="{name: 'tasks', params: {id: todo.id }}"
        v-for="todo  in Todos"
        v-bind:key="todo.id"
      >
        <v-list-item-title>{{todo.title}}</v-list-item-title>
        <v-list-item-action>
          <v-list-item-title>{{TotalTask(todo.id)}}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>





<script>
import { Todo, Task } from "@/stores/classes/TodoData/TodoData";
export default {
  name: "lists",
  data: () => ({
    form: {
      Todo: ""
    },
    ToggleTodoInput: false
  }),
  created() {
    Task.create({
      data: [
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        },
        {
          title: "new task",
          is_complete: false,
          todo_id: this.$route.params.id
        }
      ]
    });
    Todo.insert({
      data: [
        {
          title: "Z",
          user_id: 1
        },
        {
          title: "B",
          user_id: 1
        },
        {
          title: "A",
          user_id: 1
        },
        {
          title: "this is the  title in vuex ORM",
          user_id: 1
        },
        {
          title: "this is the second title in vuex ORM",
          user_id: 1
        },
        {
          title: "this is the third  title in vuex ORM",
          user_id: 1
        },
        {
          title: "this is the fourth  title in vuex ORM",
          user_id: 1
        },
        {
          title: "this is the fifth title in vuex ORM",
          user_id: 1
        },
        {
          title: "this is the sixth title in vuex ORM",
          user_id: 1
        },
        {
          title: "this is the  title in vuex",
          user_id: 2
        },
        {
          title: "this is the second title in vuex",
          user_id: 2
        },
        {
          title: "this is the third  title in vuex",
          user_id: 2
        },
        {
          title: "this is the fourth  title in vuex",
          user_id: 2
        },
        {
          title: "this is the fifth title in vuex",
          user_id: 2
        },
        {
          title: "this is the sixth title in vuex",
          user_id: 2
        }
      ]
    });
  },
  computed: {
    Todos() {
      const data = Todo.all();

      return data;
    }
  },
  methods: {
    ToggleTodo() {
      this.ToggleTodoInput = !this.ToggleTodoInput;
    },
    addTodo() {
      const Todos = Todo.all();
      Todo.create({ data: [{ title: this.form.Todo }, ...Todos] });
      this.form.Todo = "";
      this.ToggleTodoInput = !this.ToggleTodoInput;
    },
    TotalTask(index) {
      const data = Task.query()
        .where("todo_id", index)
        .get();
      return data.length;
    }
  },
  mounted() {}
};
</script>

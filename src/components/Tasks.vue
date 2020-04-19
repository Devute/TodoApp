<template>
  <fragment>
    <v-flex lg6 pl-2 pr-2>
      <div style="height:100%;">
        <v-card style="width:100%; height:100%;  overflow:hidden !important">
          <v-toolbar color="blue" dark>
            <v-card-title>{{listTitle.title}}</v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text style="height: calc(100% - 128px); overflow-y: scroll !important">
            <div>
              <v-list two-line v-bind:key="task.id" v-for="task in TASKS">
                <TaskComponent :task="task" />
              </v-list>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-layout>
              <v-flex>
                <NewTask />
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
        <NotesModal />
      </div>
    </v-flex>
    <v-flex lg3 pl-2>
      <Options />
    </v-flex>
  </fragment>
</template>

<script>
import { Todo, Task } from "@/stores/classes/TodoData/TodoData";

import TaskComponent from "./Task";
import NewTask from "./NewTask";
import Options from "./Options";
import NotesModal from "./notesModal";

export default {
  name: "Tasks",
  components: {
    TaskComponent,
    NewTask,
    NotesModal,
    Options
  },
  computed: {
    listTitle() {
      return Todo.find(this.$route.params.id);
    },
    TASKS() {
      return Task.query()
        .where("todo_id", this.$route.params.id)
        .get();
    }
  }
};
</script>

<style>
</style>
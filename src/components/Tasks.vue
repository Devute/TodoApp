<template>
  <v-card style="width:100%; height:100%;  overflow:hidden !important">
    <v-toolbar color="blue" dark>
      <v-card-title>Your Lists</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text style="height: calc(100% - 128px); overflow-y: scroll !important">
      <div>
        <v-list two-line v-bind:key="key" v-for="(task, key) in tasks">
          <Task :task="task" />
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
</template>

<script>
import Task from "./Task";
import NewTask from "./NewTask";
export default {
  name: "Tasks",
  components: {
    Task,
    NewTask
  },
  data: () => ({
    tasks: [
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: false
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: false
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: false
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      },
      {
        id: 1,
        title: "tasks title",
        subTitle: "this is a subtitle",
        isComplete: true
      }
    ]
  })
};
</script>

<style>
</style>
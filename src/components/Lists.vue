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
      <v-list-item>
        <v-list-item-title style="color:#2196f3">Create New Lists</v-list-item-title>
        <v-list-item-action>
          <v-icon>add</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list style="height: calc(100% - 128px); overflow-y: scroll !important">
      <v-list-item v-for="(list, key) in lists" v-bind:key="key">
        <v-list-item-title>{{list.title}}</v-list-item-title>
        <v-list-item-action>
          <v-list-item-title>{{list.tasks}}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>





<script>
export default {
  name: "lists",
  data: () => ({
    lists: [
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 12
      },
      {
        id: 3,
        title: "list",
        tasks: 12
      },
      {
        id: 4,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 12
      },
      {
        id: 3,
        title: "list",
        tasks: 12
      },
      {
        id: 4,
        title: "list",
        tasks: 12
      },
      {
        id: 5,
        title: "list",
        tasks: 12
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 12
      },
      {
        id: 3,
        title: "list",
        tasks: 12
      },
      {
        id: 4,
        title: "list",
        tasks: 12
      },
      {
        id: 5,
        title: "list",
        tasks: 12
      },
      {
        id: 1,
        title: "list",
        tasks: 12
      },
      {
        id: 2,
        title: "list",
        tasks: 12
      },
      {
        id: 3,
        title: "list",
        tasks: 12
      },
      {
        id: 4,
        title: "list",
        tasks: 12
      },
      {
        id: 5,
        title: "list",
        tasks: 12
      }
    ]
  })
};
</script>

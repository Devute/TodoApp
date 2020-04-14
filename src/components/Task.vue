<template>
  <div>
    <v-list-item>
      <v-list-item-action>
        <v-btn icon>
          <v-icon color="pink">edit</v-icon>
        </v-btn>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{task.title}}</v-list-item-title>
        <v-list-item-subtitle>{{task.subTitle}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon color="green" v-if="task.isComplete">check</v-icon>
          <v-icon color="grey" v-else>check</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ["task"]
};
</script>

<style>
</style>
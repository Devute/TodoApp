<template>
  <div>
    <v-list-item>
      <v-list-item-action>
        <v-btn @click="EditNote(task)" icon>
          <v-icon color="pink">edit</v-icon>
        </v-btn>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title>{{task.title}}</v-list-item-title>
        <v-list-item-subtitle>This task has {{task.notes_count}} Notes</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn @click="ToggleComplete(task)" icon>
          <v-icon color="green" v-if="task.is_complete">check</v-icon>
          <v-icon color="grey" v-else>check</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </div>
</template>

<script>
import { Task } from "@/stores/classes/TodoData/TodoData";

export default {
  name: "task",
  props: ["task"],
  computed: {},
  methods: {
    EditNote(task) {
      this.$store.commit("SET_NOTESMODAL", true);
      this.$store.commit("SET_TASK", task);
    },

    ToggleComplete(task) {
      Task.update({
        where: task.id,
        data: { is_complete: !task.is_complete }
      });
    }
  }
};
</script>


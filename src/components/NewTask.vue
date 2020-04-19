<template>
  <div>
    <v-form @submit.prevent="AddNewTask()">
      <v-text-field
        append-icon="add"
        solo
        label="New Task"
        hide-details
        v-model.trim="form.newTask"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
import { Task } from "@/stores/classes/TodoData/TodoData";

export default {
  name: "newtask",
  data() {
    return {
      form: {
        newTask: ""
      }
    };
  },
  methods: {
    AddNewTask() {
      const Tasks = Task.all();
      Task.create({
        data: [
          { title: this.form.newTask, todo_id: this.$route.params.id },
          ...Tasks
        ]
      });
      this.form.newTask = "";
      console.log(this.form.newTask);
    }
  }
};
</script>

<style>
</style>
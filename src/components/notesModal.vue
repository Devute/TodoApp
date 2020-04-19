<template>
  <v-layout>
    <v-dialog
      v-model="open"
      scrollable
      :overlay="false"
      max-width="60%"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-title>
          <span class="headline">{{TASK.title}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form @submit.prevent="addNote()" v-on:keyup.ctrl.enter="addNote()">
              <v-textarea
                solo
                v-model="form.note"
                label="Note"
                placeholder="Start writing your note."
                append-icon="add"
                autofocus
              ></v-textarea>
              <v-btn color="success" type="submit">Save</v-btn>
            </v-form>
          </v-container>
          <v-list three-line subheader>
            <v-subheader>Notes</v-subheader>
            <v-list-item v-for="note in notes" :key="note.id">
              <v-list-item-content>
                <v-list-item-title>{{note.note}}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="error" @click="destryNote(note.id)">delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="closeModal()">close</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="destryTask(TASK.id)">remove task</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import { Task, Note } from "@/stores/classes/TodoData/TodoData";

export default {
  name: "NotesModal",

  data: () => ({
    form: {
      note: ""
    }
  }),
  computed: {
    ...mapGetters(["TASK"]),
    notes() {
      const data = Note.query()
        .where("task_id", this.TASK.id)
        .get();
      return data;
    },
    // taskTitle() {
    //   if (this.TASKID) {
    //     const task = Task.find(this.TASKID);
    //     return task.title;
    //   }
    //   return "";
    // },
    open() {
      return this.$store.getters.NOTESMODAL;
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_NOTESMODAL", false);
    },
    addNote() {
      const Notes = Note.all();
      Note.create({
        data: [{ note: this.form.note, task_id: this.TASK.id }, ...Notes]
      });

      this.form.note = "";
    },
    destryNote(index) {
      Note.delete(index);
    },
    destryTask(index) {
      this.$store.commit("SET_NOTESMODAL", false);
      Note.delete(note => {
        return (note.task_id = index);
      });
      Task.delete(index);
    }
  }
};
</script>

<style>
</style>
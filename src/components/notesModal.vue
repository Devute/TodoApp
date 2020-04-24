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
				<v-toolbar elevation-0 @dblclick="EditTaskBar()">
					<v-card-title v-if="taskBar">
						<span class="headline">{{task.title}}</span>
					</v-card-title>
					<v-flex v-else>
						<v-form @submit.prevent="SubmitEditedTaskTitle">
							<v-text-field
									@blur="blurTaskBar()"
									v-model.trim="form.taskTitle"
									hide-details
									autofocus
							>
							</v-text-field>
						</v-form>

					</v-flex>
				</v-toolbar>

				<v-card-text>
					<v-container>
						<v-form @submit.prevent="addNote()">
							<v-textarea
									@keyup.ctrl.enter="addNote()"
									solo
									v-model="form.note"
									label="Note"
									placeholder="Start writing your note."
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
									<v-icon color="error" @click="destroyNote(note.id)">delete</v-icon>
								</v-btn>
							</v-list-item-action>
						</v-list-item>
					</v-list>
				</v-card-text>
				<v-card-actions>
					<v-btn text color="primary" @click="closeModal()">close</v-btn>
					<v-spacer></v-spacer>
					<v-btn text color="error" @click="destroyTask(task.id)">remove task</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>

    import {Task, Note} from "@/stores/classes/TodoData/TodoData";

    export default {
        name: "NotesModal",

        data: () => ({
            form: {
                note: "",
                taskTitle: '',
            },

        }),

        computed: {
            task() {
                const taskss = Task.find( this.$route.params.taskId);
                return taskss;
            },
            taskBar() {
                return this.$store.getters.taskBar;
            },
            notes() {
                const data = Note.query()
                    .where("task_id", this.task.id)
                    .get();
                return data;
            },
            open: {
                get() {
                    return this.$store.getters.NOTESMODAL;
                },
                set(payload) {
                    this.$store.commit("SET_NOTESMODAL", payload);
                    this.$router.push({name: "tasks"});
                }
            }
        },
        methods: {
            closeModal() {
                this.$store.commit("SET_NOTESMODAL", false);
                this.$router.push({name: "tasks"});
            },
            addNote() {
                Note.api().post(`task/${this.task.id}/note`, {
                    note: this.form.note, task_id: this.task.id
                });
                this.form.note = "";
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "success",
                    display: true,
                    message: "New Note Created"
                })
            },
            destroyNote(index) {
                Note.api().delete(`task/${this.task.id}/note/${index}`, {
                    delete: index,
                });
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "error",
                    display: true,
                    message: "Note Deleted Successfully"
                })
            },
            destroyTask(index) {
                this.$router.push({name: "tasks"});
                this.$store.commit("SET_NOTESMODAL", false);
                Note.delete(note => {
                    return (note.task_id = index);
                });
                Task.delete(index);
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "error",
                    display: true,
                    message: "Task Deleted Successfully"
                })
            },
            blurTaskBar() {
                this.$store.commit("Set_taskBar", true);
            },
            EditTaskBar() {
                this.form.taskTitle =this.task.title;
                this.$store.commit("Set_taskBar", false);
            },
            SubmitEditedTaskTitle() {
                const todo_id = this.$route.params.todoId;
                Task.api().patch(`todo/${todo_id}/task/${this.task.id}`, {
                    title: this.form.taskTitle
                });
                this.blurTaskBar();
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "primary",
                    display: true,
                    message: "Task Edited Successfully"
                })
            }
        }
    };
</script>

<style>
</style>
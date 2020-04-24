<template>
	<div>
		<v-list-item @click="ToggleComplete(task)" ripple>
			<v-list-item-action>
				<v-btn @click.stop="EditNote(task)" icon>
					<v-icon color="pink">edit</v-icon>
				</v-btn>
			</v-list-item-action>

			<v-list-item-content>
				<v-list-item-title>{{task.title}}</v-list-item-title>
				<v-list-item-subtitle>This task has {{TotalNotes(task.id)}} Notes</v-list-item-subtitle>
			</v-list-item-content>

			<v-list-item-action>
				<v-btn icon>
					<v-icon color="green" large v-if="task.is_complete">check_circle</v-icon>
					<v-icon color="grey" v-else>check_circle</v-icon>
				</v-btn>
			</v-list-item-action>
		</v-list-item>
	</div>
</template>

<script>
    import {Task} from "@/stores/classes/TodoData/TodoData.js";
    import {Note} from "@/stores/classes/TodoData/TodoData";

    export default {
        name: "task",
        props: ["task"],
        computed: {},
        methods: {
            EditNote(task) {
                this.$store.commit("SET_NOTESMODAL", true);
                this.$router.push({
                    name: "notes",
                    params: {taskId: task.id}
                });
            },

            ToggleComplete(task) {
                const todo_id = this.$route.params.todoId;
                Task.api().patch(`todo/${todo_id}/task/${task.id}`,{
                    is_complete: !task.is_complete
                });
            },
            TotalNotes(index) {
                const data = Note.query()
                    .where("task_id", index)
                    .get();
                return data.length;
            }
        }
    };
</script>


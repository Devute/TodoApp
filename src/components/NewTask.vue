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
    /* eslint-disable no-mixed-spaces-and-tabs */

    import {Task} from "@/stores/classes/TodoData/TodoData";

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
                Task.api().post(`todo/${this.$route.params.todoId}/task`, {
                    title: this.form.newTask,
                    todo_id: this.$route.params.todoId
                });
                this.form.newTask = "";
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "success",
                    display: true,
                    message: "New Task Added"
                })
            }
        }
    };
</script>

<style>
</style>
<template>
	<fragment>
		<v-flex elevation-13 lg6 pl-3 pr-3>
			<div style="height:100%;">
				<v-card style="width:100%; height:100%;  overflow:hidden !important">
					<v-toolbar color="blue" dark @dblclick="EditTitleBar()">
						<fragment v-if="editTitleBar">
							<v-card-title v-if="taskSearchBar">{{listTitle.title}}</v-card-title>
							<v-flex v-else>
								<v-text-field
										label="Search Task"
										v-model.trim="form.search"
										hide-details
										autofocus
										v-on:input="taskSearchResult()"
								>
								</v-text-field>
							</v-flex>
							<v-spacer></v-spacer>
							<v-btn icon @click="SearchTask()" >
								<v-icon v-if="taskSearchBar">search</v-icon>
								<v-icon v-else>close</v-icon>
							</v-btn>
						</fragment>
						<fragment v-else>
							<v-flex>
								<v-form @submit.prevent="SubmitEditedTitle">
									<v-text-field
											@blur="blurEditTitleBar()"
											v-model.trim="form.editedtask"
											hide-details
											autofocus
									>
									</v-text-field>
								</v-form>
							</v-flex>
						</fragment>
					</v-toolbar>
					<v-card-text style="height: calc(100% - 128px); overflow-y: scroll !important">
						<div>
							<v-list two-line v-bind:key="task.id" v-for="task in TASKS">
								<TaskComponent :task="task"/>
							</v-list>
						</div>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions>
						<v-layout>
							<v-flex>
								<NewTask/>
							</v-flex>
						</v-layout>
					</v-card-actions>
				</v-card>
				<router-view name="notes" :key="$route.fullPath"></router-view>
			</div>
		</v-flex>
		<v-flex elevation-13 lg3 pl-3>
			<Options/>
		</v-flex>
	</fragment>
</template>

<script>
    import {Todo, Task} from "@/stores/classes/TodoData/TodoData";
    import {mapGetters} from 'vuex';
    import TaskComponent from "./Task";
    import NewTask from "./NewTask";
    import Options from "./Options";

    export default {
        name: "Tasks",
        components: {
            TaskComponent,
            NewTask,
            Options
        },
        data() {
            return {
                form: {
                    search: "",
                    editedtask: ""
                }
            }
        },
        computed: {
            ...mapGetters(["sortBy", "filterBy"]),
            listTitle() {
                const todo = Todo.find(this.$route.params.todoId);
                return todo ? todo : "";
            },
            editTitleBar() {
                return this.$store.getters.editTitleBar;
            },
            taskSearchBar() {
                return this.$store.getters.taskSearchBar;
            },
            taskSearch(){
                return this.$store.getters.taskSearch;
            },
            TASKS() {
				if(this.taskSearch){
                    return this.$store.getters.searchedTask;
				}else{
                    if(this.sortBy !== null && this.filterBy === null){
                        const sorting = this.sortBy === "title" ? 'asc': "desc";
                        return Task.query()
                            .where("todo_id", this.$route.params.todoId)
                            .orderBy(this.sortBy, sorting)
                            .get();
                    }
                    else if(this.sortBy === null && this.filterBy !== null) {
                        return Task.query()
                            .where("todo_id", this.$route.params.todoId)
                            .where("is_complete",this.filterBy)
                            .orderBy("created_at", "desc")
                            .get();
                    }
                    else if(this.sortBy !== null && this.filterBy !== null){
                        const sorting = this.sortBy === "title" ? 'asc': "desc";
                        return Task.query()
                            .where("todo_id", this.$route.params.todoId)
                            .where("is_complete",this.filterBy)
                            .orderBy(this.sortBy, sorting)
                            .get();
                    }
                    else{
                        return Task.query()
                            .where("todo_id", this.$route.params.todoId)
                            .orderBy("created_at", "desc")
                            .get();
                    }
				}
            }
        },
        methods: {
            taskSearchResult(){
                const taskList =  Task.query().search(this.form.search).get();
                console.log(taskList)
                this.$store.commit("Set_searchedTask", taskList);
            },
            blurEditTitleBar() {
                this.$store.commit("Set_editTitleBar", true)
            },
            EditTitleBar() {
                this.form.editedtask = this.listTitle.title;
                this.$store.commit("Set_editTitleBar", false)
            },
            SearchTask() {
                this.$store.commit("Set_task_search", !this.taskSearch);
                this.$store.commit("Set_taskSearchBar", !this.taskSearchBar)
                this.form.search = "";
                this.$store.commit("Set_searchedTask", []);

            },
            SubmitEditedTitle() {
                const todo_id = this.$route.params.todoId;
                Todo.api().patch(`todo/${todo_id}`, {
                    title: this.form.editedtask
                });
                this.blurEditTitleBar();
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "primary",
                    display: true,
                    message: "Title has been Changed"
                })
            }

        },

    };
</script>

<style>
</style>
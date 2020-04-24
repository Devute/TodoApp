<template>
	<v-card style="width:100%; height:100%;  overflow:hidden !important">
		<v-toolbar color="blue" dark>
			<v-card-title v-if="!listSearchBar">Your Lists</v-card-title>
			<v-flex v-else>
				<v-text-field
						label="Search list"
						v-model.trim="form.search"
						hide-details
						autofocus
						v-on:input="searchResult()"
				>
				</v-text-field>
			</v-flex>
			<v-spacer></v-spacer>
			<v-btn icon @click="toggleListSearch()" >
				<v-icon v-if="!listSearchBar">search</v-icon>
				<v-icon v-else>close</v-icon>
			</v-btn>
		</v-toolbar>
		<v-list>
			<v-list-item ripple @click="ToggleTodo()" v-if="!ToggleTodoInput">
				<v-list-item-title style="color:#2196f3">Create New Lists</v-list-item-title>
				<v-list-item-action >
					<v-icon>add</v-icon>
				</v-list-item-action>
			</v-list-item>
			<v-flex v-else>
				<v-form ref="form" @submit.prevent="addTodo()">
					<v-text-field
							solo
							label="Create New Todo List"
							hide-details
							append-icon="add"
							@blur="ToggleTodo()"
							v-model.trim="form.Todo"
							autofocus
					></v-text-field>
				</v-form>
			</v-flex>
		</v-list>

		<v-divider></v-divider>
		<v-list style="height: calc(100% - 128px); overflow-y: scroll !important">
			<v-list-item
					@click="gotoList(todo)"

					v-for="todo  in Todos"
					v-bind:key="todo.id"
			>
				<v-list-item-title>{{todo.title}}</v-list-item-title>
				<v-list-item-action>
					<v-list-item-title>{{TotalTask(todo.id)}}</v-list-item-title>
				</v-list-item-action>
			</v-list-item>
		</v-list>
	</v-card>
</template>


<script>
    /* eslint-disable no-mixed-spaces-and-tabs */

    import {Todo, Task} from "@/stores/classes/TodoData/TodoData";
    // import User from "@/stores/classes/User";

    export default {
        name: "lists",
        data: () => ({
            form: {
                Todo: "",
                search: ""
            },
            ToggleTodoInput: false
        }),
        computed: {
            Todos() {
                if(this.listSearchData){
                    return this.$store.getters.searchedList;
                }else{
                    return Todo.query().orderBy('id', 'desc').get();
                }
            },
            listSearchBar(){
                return this.$store.getters.listSearchBar;
            },
            listSearchData(){
                return this.$store.getters.listSearchData;
            },
        },
        methods: {
            gotoList(todo){
                this.$store.commit("Set_background", todo.image_path);
                this.$router.push({name: 'tasks', params: {todoId: todo.id }})
            },
            searchResult(){
               const todoList =  Todo.query().search(this.form.search).get();
                this.$store.commit("Set_searchedList", todoList);
            },
            toggleListSearch(){
                this.$store.commit("Set_searchedList", []);
                this.$store.commit("Set_listsearchdata", !this.listSearchData);
                this.$store.commit("Set_listSearchBar", !this.listSearchBar);
                this.form.search = "";
                this.$store.commit("Set_taskSearchBar", true)
            },
            ToggleTodo() {
                this.ToggleTodoInput = !this.ToggleTodoInput;
            },
            addTodo() {
                Todo.api().post("todo", {
	                title: this.form.Todo
                });

                this.form.Todo = "";
                this.ToggleTodoInput = !this.ToggleTodoInput;
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "success",
	                display: true,
	                message: "New List Created"
                })
            },
            TotalTask(index) {
                const data = Task.query()
                    .where("todo_id", index)
                    .get();
                return data.length;
            }
        },
    };
</script>

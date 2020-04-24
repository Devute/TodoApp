<template>
	<div style="height:100%;">
		<v-card style="height:100%;">
			<v-toolbar color="pink" dark>
				<v-card-title>Options</v-card-title>
				<v-spacer></v-spacer>
			</v-toolbar>
			<v-list>
				<v-list-group
						v-for="item in items"
						:key="item.title"
						v-model="item.active"
						:prepend-icon="item.action"
						no-action
				>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title v-text="item.title"></v-list-item-title>
						</v-list-item-content>
					</template>
					<v-list-item
							v-for="subItem in item.items"
							:key="subItem.title"
							active-class
							v-on="item.action === 'sort' ? {click: () => sort(subItem.by)} : { click: () => filter(subItem.by)}"
					>
						<v-list-item-content>
							<v-list-item-title v-text="subItem.title"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>

				<v-list-group :prepend-icon="'filter'" no-action>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title>List Options</v-list-item-title>
						</v-list-item-content>
					</template>
					<v-list-item active-class @click="DeleteTodo()">
						<v-list-item-content>
							<v-list-item-title>Remove List</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-list-item @click="openDrawer()" active-class>
						<v-list-item-content>
							<v-list-item-title>Change Background</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-card>
		<MoreOptions/>
	</div>
</template>

<script>
    /* eslint-disable no-mixed-spaces-and-tabs */

    import MoreOptions from "./moreOptions";
    import {Todo} from "@/stores/classes/TodoData/TodoData";

    export default {
        name: "options",
        components: {
            MoreOptions
        },
        data: () => ({
            items: [
                {
                    action: "sort",
                    title: "Sort By",
                    active: true,
                    items: [
                        {
                            title: "All",
                            by: null
                        },
                        {
                            title: "Date",
                            by: "created_at"
                        },
                        {
                            title: "Name",
                            by: "title"
                        }
                    ]
                },
                {
                    action: "filter_list",
                    title: "Filter By",
                    active: false,
                    items: [
                        {
                            title: "All",
                            by: null
                        },
                        {
                            title: "Remaining",
                            by: false
                        },
                        {
                            title: "Completed",
                            by: true
                        }
                    ]
                }
            ]
        }),
        methods: {
            sort(value) {

                this.$store.commit("Set_sortBy", value);
            },
            filter(value) {
                this.$store.commit("Set_filterBy", value);
            },
            openDrawer() {
                this.$store.commit("SET_DRAWER", true);
            },
            DeleteTodo() {
                const todo_id = this.$route.params.todoId;
                Todo.api().delete('todo/' + todo_id, {
                    delete: todo_id,
                });
                this.$router.push("/");
                this.$store.commit("SET_NOTIFICATION", {
                    alertClass: "error",
                    display: true,
                    message: "List Deleted Successfully"
                })
            }
        }
    };
</script>

<style>
</style>
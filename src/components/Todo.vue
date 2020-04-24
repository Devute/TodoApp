<template>
	<div style="height: 94.5vh;">
		<v-container
				fluid
				fill-height
				pb-3
				:style="backgroundUrl "
		>
			<v-layout align-content-space-between justify-content-space-between>
				<div style="display:flex; width: 100%">
					<v-flex elevation-13 lg3 pr-3>
						<lists/>
					</v-flex>
					<router-view name="tasks" v-if="renderTask" :key="$route.fullPath"></router-view>
				</div>
			</v-layout>
		</v-container>

		<v-footer color="indigo" height="auto">
			<v-layout justify-center>
				<v-flex indigo text-center white--text>
					&copy;2020 ||
					<strong>Dipro</strong>
				</v-flex>
			</v-layout>
		</v-footer>
	</div>
</template>

<script>
    import Lists from "./Lists";
    import User from "@/stores/classes/User";

    export default {
        name: "todo",
        components: {
            Lists
        },
        created() {
            User.api().get('todos')
                .then(() => {
                    this.$store.commit('Set_renderTask', true);
                });
        },
        computed: {
            backgroundUrl() {
                const bg = this.$store.getters.background;
                return "background: url(" + bg + "); background-size: cover; background-repeat: no-repeat";
            },
            renderTask() {
                return this.$store.getters.renderTask;
            },
        }

    };
</script>

<template>
	<v-container fill-height>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card class="elevation-12">
					<v-toolbar dark color="blue">
						<v-card-title>Login Form</v-card-title>
					</v-toolbar>
					<v-card-text>
						<v-text-field
								prepend-icon="person"
								v-model="form.username"
								label="login"
								type="text"></v-text-field>
						<v-text-field
								prepend-icon="lock"
								v-model="form.password"
								label="password"
								type="password"
						>
						</v-text-field>
					</v-card-text>
					<v-divider light></v-divider>
					<v-card-actions>
						<v-btn to="/signup" rounded dark color="indigo">Sign Up</v-btn>
						<v-spacer></v-spacer>
						<v-btn @click="submit()" rounded dark color="primary">
							Login
							<v-icon>keyboard_arrow_right</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
    /* eslint-disable no-mixed-spaces-and-tabs */



    export default {
        name: "Login",
        data() {
            return {
               form: {
                   username: "",
                   password: "",
               }
            }
        },
	    methods:{
            async submit(){
               await this.$store.dispatch("set_token", this.form)
	               .then(()=>{
                       this.$router.push('/');
	               });

            }
	    }

    };
</script>

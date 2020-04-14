<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-card-title>Login Form</v-card-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field prepend-icon="person" name="login" label="login" type="text"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" label="password" type="password"></v-text-field>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <v-btn rounded dark color="indigo">Sign Up</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded dark color="primary">
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
export default {
  name: "Login"
};
</script>

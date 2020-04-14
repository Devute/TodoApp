<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-card-title>Signup Form</v-card-title>
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-alert
                :value="true"
                color="error"
                icon="warning"
              >this user already exists. try a different set of data.</v-alert>
              <v-text-field
                prepend-icon="person"
                name="username"
                label="Name"
                type="text"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                prepend-icon="email"
                name="email"
                label="E-mail"
                type="text"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-text-field
                prepend-icon="lock"
                name="password"
                label="password"
                type="password"
                v-model="password"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                prepend-icon="lock"
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                v-model="confirm_password"
                :rules="[rules.required]"
                :error="!valid()"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-divider light></v-divider>

          <v-card-actions>
            <v-btn rounded dark color="black" pa-5>Sign in</v-btn>
            <v-spacer></v-spacer>
            <v-btn rounded dark color="success">
              Register
              <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    password: "",
    confirm_password: "",
    rules: {
      required: value => !!value || "required",
      email: value => {
        const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(value) || "Invalid e-mail.";
      }
    }
  }),
  methods: {
    valid() {
      return this.password === this.confirm_password;
    }
  }
};
</script>

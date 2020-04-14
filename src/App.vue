<template>
  <v-app>
    <todo />
  </v-app>
</template>

<script>
import Todo from "./components/Todo";
export default {
  name: "App",
  components: {
    Todo
  }
};
</script>

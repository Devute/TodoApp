<template>
  <div style="height: 94.5vh;">
    <v-container fluid fill-height pb-0>
      <v-layout align-content-space-between justify-content-space-between>
        <div style="display:flex; width: 100%">
          <v-flex lg3 pr-2>
            <lists />
          </v-flex>

          <router-view name="tasks" :key="$route.fullPath"></router-view>
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

export default {
  name: "todo",
  components: {
    Lists
  }
};
</script>

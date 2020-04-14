<template>
  <div style="height: 94.5vh;">
    <v-container fluid fill-height pb-0>
      <v-layout align-content-space-between justify-content-space-between>
        <v-flex lg3 pr-2>
          <lists />
        </v-flex>
        <v-flex lg6 pl-2 pr-2>
          <tasks />
        </v-flex>
        <v-flex lg3 pl-2>
          <Options />
        </v-flex>
      </v-layout>
    </v-container>

    <v-footer color="indigo" height="auto">
      <v-layout justify-center>
        <v-flex indigo text-center white--text>
          &copy;2019 ||
          <strong>Dipro</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import Lists from "./Lists";
import Tasks from "./Tasks";
import Options from "./Options";
export default {
  name: "todo",
  components: {
    Lists,
    Tasks,
    Options
  }
};
</script>

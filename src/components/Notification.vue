<template>
  <v-snackbar v-model="NOTIFICATION.display" bottom right :color="NOTIFICATION.class">
    {{NOTIFICATION.message}}
    <v-btn text dark @click="closeNotification()" icon>
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "notification",
  computed: {
    ...mapGetters(["NOTIFICATION"]),
  },
  methods :{
    closeNotification() {
      return this.$store.commit("SET_NOTIFICATION", { display: false });
    }
  }
};
</script>

<style>
</style>
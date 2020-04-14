<template>
  <v-card>
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
          v-on="item.acion === 'sort' ? {click: () => sort(subItem.by)} : { click: () => filter(subItem.by)}"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "options",
  data: () => ({
    items: [
      {
        action: "sort",
        title: "Sort By",
        active: true,
        items: [
          {
            title: "Date",
            by: "date"
          },
          {
            title: "Name",
            by: "came"
          }
        ]
      },
      {
        action: "filter_list",
        title: "Filter By",
        active: false,
        items: [
          {
            title: "Remaining",
            by: "remaining"
          },
          {
            title: "Completed",
            by: "completed"
          }
        ]
      }
    ]
  }),
  methods: {
    sort(value) {
      console.log("sort by " + value);
    },
    filter(value) {
      console.log("filter by " + value);
    }
  }
};
</script>

<style>
</style>
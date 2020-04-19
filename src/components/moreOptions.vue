<template>
  <v-layout>
    <v-navigation-drawer temporary absolute v-model="open" right>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Dipro</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-form>
        <v-container fluid>
          <v-layout>
            <v-flex xs12>
              <img :src="imageUrl" height="150px" alt />
              <v-text-field
                name="imageName"
                label="Select an Image"
                v-model="imageName"
                prepend-icon="attach_file"
                @click="pickFile()"
              ></v-text-field>
              <input
                type="file"
                style="display:none"
                ref="image"
                accept="image/*"
                @change="onFilePicked()"
              />
              <v-btn :loading="loading" :disabled="!imageFile" @click="uploadFile()">
                Set as Background
                <v-icon>cloud_upload</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {
  name: "moreOptions",
  data: () => ({
    loading: false,
    imageName: "",
    imageUrl: "",
    imageFile: "",
    mini: true
  }),
  computed: {
    open: {
      get() {
        return this.$store.getters.DRAWER;
      },
      set(value) {
        console.log(value);
        this.$store.commit("SET_DRAWER", value);
      }
    }
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;

      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);

        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageUrl = "";
        this.imageFile = "";
      }
    },
    uploadFile() {}
  }
};
</script>

<style>
</style>
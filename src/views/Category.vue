<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <h3>Create New Category</h3>
      <v-col cols="10">
        <v-text-field v-model="category" outlined label="Category" color="indigo"  class="mt-5"></v-text-field>
        <v-btn color="indigo" class="d-block mx-auto" @click="addCategory" x-large><v-icon>mdi mdi-plus</v-icon>Add</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-3">
      <v-col cols="11">
         <v-list subheader v-for="(category,index) in $store.getters.getCategory"
        :key="index" class="mt-4">
      <v-list-item
      >
        <v-list-item-content>
          <v-list-item-title>{{category}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn rounded class="mr-3">
            <v-icon>
            mdi-pencil
           </v-icon>
          </v-btn>
          <v-btn rounded>
            <v-icon>
            mdi-delete
           </v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: "CategoryVue",
    data(){
      return {
        category : "",
      }
    },
     methods: {
    addCategory() {
      this.$store.commit("addCategory", this.category);
      this.category = '';
    }}
}
</script>

<style>

</style>
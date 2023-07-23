<template>
  <v-container>
    <v-row class="justify-center mt-4">
      <h3>Create New Category</h3>
      <v-col cols="10">
        <v-text-field v-model="category" outlined label="Category" color="indigo"  class="mt-5"></v-text-field>
        <v-btn color="indigo" class="d-block mx-auto" @click="addCategory" x-large :disabled="category.length === 0"><v-icon>mdi mdi-plus</v-icon>Add</v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-3">
      <v-col cols="11">
      <v-list subheader v-for="(category,index) in $store.getters.getCategory"
        :key="index" class="mt-4">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{category}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn rounded class="mr-3" @click="editCategory(index)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn rounded @click="delCategory(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
      </v-col>
    </v-row>
     <v-dialog
      v-model="dialog"
      max-width="290"
      overlay-color="#C5CAE9"
    >
      <v-card>
        <v-card-title class="text-h5">
          Edit Category
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="edit_card" label="Category Name">
          </v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false">
            Cancle
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="updateCategory">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-container>
</template>

<script>
export default {
    name: "CategoryVue",
    data(){
      return {
        category : "",
        dialog : false,
        edit_card : "",
        edit_index : ""
      }
    },
     methods: {
    addCategory() {
      this.$store.commit("addCategory", this.category);
      this.category = '';
    },
    editCategory(index){
      this.dialog = true;
      this.edit_card = this.$store.getters.getCategory[index];
      this.edit_index = index;
    },
    delCategory(index){
      if(confirm("Are You Sure?")){
        this.$store.commit("delcategory",index)
      }
    },
    updateCategory(){
      this.$store.commit("setCategory",{index:this.edit_index,category : this.edit_card})
      this.dialog = false
    }
    }
}
</script>

<style>

</style>
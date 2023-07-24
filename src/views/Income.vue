<template>
  <v-container>
        <v-row class="justify-center mt-4">
        <h3>Create New Income</h3>
        <v-col cols="10">
          <v-text-field v-model="income.amount" label="Amount" color="#5E35B1"  class="mt-5"></v-text-field>
          <v-autocomplete :items="$store.getters.getCategory" clearable v-model="income.category"> 
          </v-autocomplete>
          <v-btn color="#5E35B1" class="d-block mx-auto" x-large @click="addIncome" :disabled="income.amount.length === 0"><v-icon>mdi mdi-plus</v-icon>Add</v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-3">
      <v-col cols="11">
      <v-list subheader v-for="(income,index) in $store.getters.getIncome"
        :key="index">
      <v-list-item class="mt-2">
        <v-list-item-content>
          <v-list-item-title>{{income.amount}}</v-list-item-title>
          <v-list-item-subtitle>{{income.category}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn rounded class="mr-3" @click="editIncome(index)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn rounded @click="delIncome(index)">
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
          Edit Income
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="edit_income.amount" label="Amount">
          </v-text-field>
            <v-autocomplete :items="$store.getters.getCategory" clearable v-model="edit_income.category" label="Category"> 
          </v-autocomplete>
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
            @click="updateIncome">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
    name: "IncomeVue",
    data: ()=>({
      dialog : false,
      edit_income : "",
      edit_index : "",
      income : {
        amount : "",
        category : "",
      }
    }),
    methods : {
      addIncome(){
        this.$store.commit("addIncome",this.income)
        this.income = {
          amount : "",
          category : ""
        }
      },
      editIncome(index){
        this.dialog = true;
        this.edit_income = this.$store.getters.getIncome[index];
        this.edit_index = index;
      },
      delIncome(index){
        if(confirm("Are you sure to delete this Income ? "))
        this.$store.commit("delIncome",index)
      },
      updateIncome(){
        this.$store.commit("setIncome",{index:this.edit_index,income : this.edit_income})
        this.dialog = false;
    }
    }
}
</script>

<style>

</style>
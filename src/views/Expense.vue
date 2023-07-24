<template>
    <v-container>
        <v-row class="justify-center mt-4">
        <h3>Create New Expense</h3>
        <v-col cols="10">
          <v-text-field v-model="expense.amount" label="Amount" color="#5E35B1"  class="mt-5"></v-text-field>
          <v-autocomplete :items="$store.getters.getCategory" clearable v-model="expense.category"> 
          </v-autocomplete>
          <v-btn color="#5E35B1" class="d-block mx-auto" x-large @click="addExpense" :disabled="expense.amount.length === 0"><v-icon>mdi mdi-plus</v-icon>Add</v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-center mt-3">
      <v-col cols="11">
      <v-list subheader v-for="(expense,index) in $store.getters.getExpense"
        :key="index">
      <v-list-item class="mt-2">
        <v-list-item-content>
          <v-list-item-title>{{expense.amount}}</v-list-item-title>
          <v-list-item-subtitle>{{expense.category}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
          <v-btn rounded class="mr-3" @click="editExpense(index)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn rounded @click="delExpense(index)">
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
          Edit Expense
        </v-card-title>

        <v-card-text>
          <v-text-field v-model="edit_expense.amount" label="Amount">
          </v-text-field>
            <v-autocomplete :items="$store.getters.getCategory" clearable v-model="edit_expense.category" label="Category"> 
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
            @click="updateExpense">
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
    name : "ExpenseVue",
    data(){
      return {
        category : "",
        dialog : false,
        edit_expense : "",
        edit_index : "",
        expense : {
        amount : "",
        category : "",
      }
      }
    },
     methods: {
    addExpense() {
      this.$store.commit("addExpense", this.expense);
      this.expense = {
        amount : "",
        category : "",
      }
    },
    editExpense(index){
      this.dialog = true;
      this.edit_expense = this.$store.getters.getExpense[index];
      this.edit_index = index;
    },
    delExpense(index){
      if(confirm("Are You Sure?")){
        this.$store.commit("delExpense",index)
      }
    },
    updateExpense(){
      this.$store.commit("setExpense",{index:this.edit_index,expense : this.edit_expense})
      this.dialog = false
    }
    }
}
</script>

<style>

</style>
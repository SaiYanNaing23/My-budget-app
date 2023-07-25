<template>
<v-container>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>Income</v-card-title>
         <v-sparkline
          :value="$store.getters.getIncome.map(v => Number(v.amount))"
          :labels="$store.getters.getIncome.map(v=>Number(v.amount).toLocaleString())"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw >
          </v-sparkline>
      </v-card>
      
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Expense</v-card-title>
         <v-sparkline
          :value="$store.getters.getExpense.map(v=>Number(v.amount))"
          :labels="$store.getters.getExpense.map(v=>Number(v.amount).toLocaleString())"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
      ></v-sparkline>
      </v-card>
      
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-title>Income</v-list-item-title>
            <v-list-item-title>{{totalIncome.toLocaleString()}}</v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-title>Expense</v-list-item-title>
            <v-list-item-title>{{totalExpense.toLocaleString()}}</v-list-item-title>
          </v-list-item>
            <v-list-item>
            <v-list-item-title>Total</v-list-item-title>
            <v-list-item-title>{{getTotal.toLocaleString()}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
 const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
    name: "DashBoard",
     data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
    computed : {
      totalIncome(){
        let total = this.$store.getters.getIncome.map(v=>Number(v.amount));
        return total.reduce((total,totalIncome)=> total += totalIncome,0)
      },
      totalExpense(){
        let total = this.$store.getters.getExpense.map(v => Number(v.amount));
        return total.reduce((total,totalExpense)=> total += totalExpense,0)
      },
      getTotal(){
        return this.totalIncome - this.totalExpense
      }
    }
}
</script>

<style>

</style>
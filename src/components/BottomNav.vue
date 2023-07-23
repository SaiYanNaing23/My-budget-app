<template>
   <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    shift
    fixed
  >
    <v-btn height="100%" to="/" >
      <span>Dashboard</span>
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-btn height="100%" to="/Expense">
      <span>Expense</span>

      <v-icon>mdi-ticket-percent-outline</v-icon>
    </v-btn>

    <v-btn height="100%" to="/Income">
      <span>Income</span>

      <v-icon>mdi-download-box-outline</v-icon>
    </v-btn>

    <v-btn height="100%" to="/Category">
      <span>Category</span>

      <v-icon>mdi-card-text-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
 export default {
    name: "BottomNav",
    data: () => ({ value: 1 }),

    computed: {
      color () {
        switch (this.value) {
          case 0: return '#EF5350'
          case 1: return 'teal'
          case 2: return '#5E35B1'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>

<style>

</style>
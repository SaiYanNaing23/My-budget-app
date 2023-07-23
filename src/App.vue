<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <BottomNavVue />
  </v-app>
</template>

<script>
import BottomNavVue from './components/BottomNav.vue';

export default {
  name: 'App',

  components: {
    BottomNavVue,
  },

  data: () => ({
    //
  }),
};
</script>

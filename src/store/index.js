import Vue from 'vue'
import Vuex from 'vuex'
import Category from './modules/Category'
// import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
     key : "myBudge",
    }),
  ],
  modules: {Category}
})

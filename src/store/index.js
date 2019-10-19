import Vue from 'vue';
import Vuex from 'vuex';
import weather from './modules/weather';
import giphy from './modules/giphy';

// Create the store
Vue.use(Vuex);
// Export vuex
export default new Vuex.Store({
  modules: {
    weather,
    giphy
  }
});
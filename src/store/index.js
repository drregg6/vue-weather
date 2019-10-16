import Vue from 'vue';
import Vuex from 'vuex';
import weather from './modules/weather';

// Create the store
Vue.use(Vuex);
// Export vuex
export default new Vuex.Store({
  modules: {
    weather
  }
});
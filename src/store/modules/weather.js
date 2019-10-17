import axios from 'axios';
const WEATHER_API = process.env.VUE_APP_WEATHER_API;

const state = {
  weather: {}
};

const getters = {
  getState: () => state.weather
};

const actions = {
  async getWeather({ commit }) {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${WEATHER_API}`
      );
      commit("commitWeather", res.data);
      /* eslint-disable no-console */
      console.log(res.data);
      /* eslint-enable no-console */
    } catch(err) {
      // eslint-disable-next-line
      console.error(err);
    }
  }
};

const mutations = {
  commitWeather: (state, data) => (state.weather = data)
};

export default {
  state,
  getters,
  actions,
  mutations
};

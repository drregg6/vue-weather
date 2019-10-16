import axios from 'axios';

const state = {
  weather: {}
};

const getters = {
  getState: () => state.weather
};

const actions = {
  getWeather: async ({ commit }) => {
    const res = await axios.get("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22");
    console.log(res.data);

    // commit("commitWeather", res.data);
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

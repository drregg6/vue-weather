import axios from 'axios';
const GIPHY_API = process.env.VUE_APP_GIPHY_API;

const state = {
  giphy: {}
};

const getters = {
  getGiphy: (state) => state.giphy.bitly_url
};

const actions = {
  async findGiphy({ commit }) {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API}`
      )
      commit("commitGiphy", res.data.data);
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
    }
  }
};

const mutations = {
  commitGiphy: (state, data) => state.giphy = data
};

export default {
  state,
  getters,
  actions,
  mutations
};

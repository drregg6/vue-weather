import axios from 'axios';
const GIPHY_API = process.env.VUE_APP_GIPHY_API;

const state = {
  giphy: {
    images: {
      original: {
        url: ''
      }
    }
  },
  giphies: [
    {
      images: {
        original: {
          url: String
        }
      }
    }
  ]
};

const getters = {
  getGiphy: (state) => state.giphy.images.original.url
};

const actions = {
  async findRandom({ commit }) {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API}`
      )
      // eslint-disable-next-line
      console.log(res.data.data.images.original.url)
      commit("commitRandom", res.data.data);
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
    }
  },

  async searchGiphy({ commit }, searchTerm) {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q="${searchTerm}"&api_key=${GIPHY_API}`
      );

      const obj = res.data.data[Math.floor(Math.random()*res.data.data.length)];
      
      // eslint-disable-next-line
      console.log(obj);

      commit("commitSearch", obj);
    } catch(err) {
      // eslint-disable-next-line
      console.error(err);
    }
  }
};

const mutations = {
  commitRandom: (state, data) => state.giphy = data,
  commitSearch: (state, data) => state.giphy = data
};

export default {
  state,
  getters,
  actions,
  mutations
};
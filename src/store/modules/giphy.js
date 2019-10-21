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

  async searchGiphy({ commit }, num) {
    let timeOfDay = new Date();
    timeOfDay = timeOfDay.getHours();
    let digit = parseInt(("" + num)[0]);
    let searchTerm = "";
    // eslint-disable-next-line
    console.log(timeOfDay);
    switch(digit) {
      case 2:
        searchTerm = "thunderstorm";
        break;
      case 3:
        searchTerm = "drizzle";
        break;
      case 5:
        searchTerm = "rain";
        break;
      case 6:
        searchTerm = "snow";
        break;
      case 7:
        searchTerm = "fog";
        break;
      case 8:
        if (timeOfDay >= 6 && timeOfDay <= 18) {
          searchTerm = "sun";
        } else {
          searchTerm = "moon";
        }
        break;
      case 9:
          if (timeOfDay >= 6 && timeOfDay <= 18) {
            searchTerm = "cloud";
          } else {
            searchTerm = "moon";
          }
        break;
      default:
        searchTerm = "sunny";
    }

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

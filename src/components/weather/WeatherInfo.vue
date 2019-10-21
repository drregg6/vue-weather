<template>
  <div class="weather-info">
    <div v-if="getGiphy">
      <img :src="source">
    </div>
    <div v-else>
      <p>Loading</p>
    </div>
    <div v-if="getTemp">
      <div class="temp" v-on:click="onClick">
        <p v-if="cels === true">
          {{ kelvinToCelsius(getTemp) }}
        </p>
        <p v-else>
          {{ kelvinToFahr(getTemp) }}
        </p>
      </div>
      <p>
        {{ getMain }}
      </p>
      <p>
        {{ capitalize(getDesc) }}
      </p>
    </div>
    <div v-else>
      <h1>Finding Location...</h1>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import kelvinToCelsius from '../../helpers/kelvinToCelsius';
  import kelvinToFahr from '../../helpers/kelvinToFahr';
  import capitalize from '../../helpers/capitalize';

  export default {
    name: "WeatherInfo",
    computed: {
      ...mapGetters(["getId", "getMain", "getTemp", "getDesc", "getState", "getGiphy"])
    },
    methods: {
      ...mapActions(["searchGiphy"]),
      capitalize,
      kelvinToCelsius,
      kelvinToFahr,
      onClick() {
        this.cels = !this.cels
      }
    },
    created() {
      this.searchGiphy(this.getId)
    },
    watch: {
      getId(newValue, oldValue) {
        // eslint-disable-next-line
        console.log(`The old value is ${oldValue} and the new val is ${newValue}`);

        if (oldValue !== newValue) {
          this.source = this.searchGiphy(newValue);
        }
      }
    },
    updated() {
      this.source = this.getGiphy;
    },
    data() {
      return {
        cels: true,
        source: ""
      }
    }
  }
</script>

<style scoped>
.temp {
  cursor: pointer;
}
</style>
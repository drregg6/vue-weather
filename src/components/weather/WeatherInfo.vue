<template>
  <div class="weather-info">
    <div v-if="getState">
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
  import { mapGetters } from 'vuex';
  import kelvinToCelsius from '../../helpers/kelvinToCelsius';
  import kelvinToFahr from '../../helpers/kelvinToFahr';
  import capitalize from '../../helpers/capitalize';

  export default {
    name: "WeatherInfo",
    computed: {
      ...mapGetters(["getMain", "getTemp", "getDesc", "getState"])
    },
    methods: {
      capitalize,
      kelvinToCelsius,
      kelvinToFahr,
      onClick() {
        this.cels = !this.cels
      }
    },
    data() {
      return {
        cels: true
      }
    }
  }
</script>

<style scoped>
.temp {
  cursor: pointer;
}
</style>
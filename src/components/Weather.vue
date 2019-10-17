<template>
  <div class="weather">
    <h1>Weather goes here</h1>
    <dic>
      {{ weather.weather.name }}
      <div>
        {{ weather.weather.weather[0].main }}
      </div>
      <div>
        {{ weather.weather.weather[0].description }}
      </div>
      <div>
        {{ this.KelvinToCelsius(weather.weather.main.temp) }}
      </div>
    </dic>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import KelvinToCelsius from '../helpers/KelvinToCelsius';

  export default {
    name: "Weather",
    computed: {
      ...mapGetters(["getState"]),
      ...mapState(["weather"])
    },
    methods: {
      ...mapActions(["getWeather"]),
      KelvinToCelsius
    },
    created() {
      this.getWeather();
    }
  }
</script>

<style scoped>
.weather {
  background: yellow;
}
</style>
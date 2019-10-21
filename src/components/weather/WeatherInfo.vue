<template>
  <div class="weather-info">
    <WeatherGiphy />
    <div v-if="getState">
      <WeatherTemp />
      <WeatherMain />
    </div>
    <div v-else>
      <h1>Finding Location...</h1>
    </div>
  </div>
</template>

<script>
  import WeatherTemp from './WeatherTemp';
  import WeatherGiphy from './WeatherGiphy';
  import WeatherMain from './WeatherMain';

  import { mapGetters } from 'vuex';

  export default {
    name: "WeatherInfo",
    components: {
      WeatherTemp,
      WeatherGiphy,
      WeatherMain
    },
    computed: {
      ...mapGetters(["getState"])
    }
  }
</script>

<style scoped>

</style>
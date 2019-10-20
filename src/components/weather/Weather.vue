<template>
  <div class="weather">
    <WeatherHeader />
    <WeatherInfo />
  </div>
</template>

<script>
  import WeatherHeader from './WeatherHeader';
  import WeatherInfo from './WeatherInfo';
  import { mapActions } from 'vuex';

  export default {
    name: "Weather",
    methods: mapActions(["getWeather"]),
    components: {
      WeatherHeader,
      WeatherInfo
    },
    created() {
      this.getWeather();
    }
  }
</script>

<style scoped>
.weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  text-align: center;
  background: yellow;
}
</style>
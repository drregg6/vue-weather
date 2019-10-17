<template>
  <div class="weather">
    <WeatherHeader v-bind:name="weather.weather.name" />
    <WeatherInfo
      v-bind:desc="weather.weather.weather[0].description"
      v-bind:temp="weather.weather.main.temp"
      v-bind:main="weather.weather.weather[0].main"
    />
  </div>
</template>

<script>
  import WeatherHeader from './WeatherHeader';
  import WeatherInfo from './WeatherInfo';
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: "Weather",
    components: {
      WeatherHeader,
      WeatherInfo
    },
    computed: {
      ...mapGetters(["getState"]),
      ...mapState(["weather"])
    },
    methods: {
      ...mapActions(["getWeather"])
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
  height: 50vh;
  background: yellow;
}
</style>
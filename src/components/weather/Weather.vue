<template>
  <div class="weather">
    <WeatherHeader />
    <WeatherInfo />
  </div>
</template>

<script>
  import WeatherHeader from './WeatherHeader';
  import WeatherInfo from './WeatherInfo';

  export default {
    name: "Weather",
    components: {
      WeatherHeader,
      WeatherInfo
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
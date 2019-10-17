<template>
  <div class="weather-info">
    <p v-on:click="onClick">
      {{ myTemp }}
    </p>
    <p>
      {{ main }}
    </p>
    <p>
      {{ myDesc }}
    </p>
  </div>
</template>

<script>
  import fahrToCels from '../../helpers/fahrToCels';
  import celsToFahr from '../../helpers/celsToFahr';
  import kelvinToCelsius from '../../helpers/kelvinToCelsius';
  import capitalize from '../../helpers/capitalize';

  export default {
    name: "WeatherInfo",
    props: ["main", "temp", "desc"],
    methods: {
      kelvinToCelsius,
      fahrToCels,
      celsToFahr,
      capitalize,
      onClick: function() {
        if (this.myTemp.slice(-1) === 'C') {
          this.myTemp = celsToFahr(this.myTemp);
        } else {
          this.myTemp = fahrToCels(this.myTemp);
        }
      }
    },
    data() {
      return {
        myTemp: kelvinToCelsius(this.temp),
        myDesc: capitalize(this.desc)
      }
    }
  }
</script>

<style scoped>

</style>
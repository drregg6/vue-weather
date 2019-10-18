<template>
  <div class="weather-info">
    <p v-on:click="onClick">
      {{ myTemp }}
    </p>
    <p>
      {{ getMain() }}
    </p>
    <p>
      {{ getDesc() }}
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import fahrToCels from '../../helpers/fahrToCels';
  import celsToFahr from '../../helpers/celsToFahr';
  import kelvinToCelsius from '../../helpers/kelvinToCelsius';
  import capitalize from '../../helpers/capitalize';

  export default {
    name: "WeatherInfo",
    methods: {
      ...mapGetters(["getTemp", "getMain", "getDesc", "getState"]),
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
        myTemp: kelvinToCelsius(this.getState().main.temp),
        myMain: this.getState().weather[0].main,
        myDesc: this.getState().weather[0].desc

      }
    },
    updated() {
      this.myTemp = kelvinToCelsius(this.getTemp())
    }
  }
</script>

<style scoped>

</style>
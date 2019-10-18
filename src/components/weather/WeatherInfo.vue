<template>
  <div class="weather-info">
    <p v-on:click="onClick">
      {{ getTemp }}
    </p>
    <p>
      {{ getMain }}
    </p>
    <p>
      {{ capitalize(getDesc) }}
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
    computed: mapGetters(["getTemp", "getMain", "getDesc", "getState"]),
    methods: {
      kelvinToCelsius,
      fahrToCels,
      celsToFahr,
      capitalize,
      onClick: function() {
        if (this.getTemp.slice(-1) === 'C') {
          // eslint-disable-next-line
          this.getTemp = celsToFahr(this.getTemp);
        } else {
          this.getTemp = fahrToCels(this.getTemp);
        }
      }
    },
    data() {
      return {
        myTemp: this.kelvinToCelsius(this.getTemp())
      }
    },
    updated() {
      this.myTemp = this.kelvinToCelsius(this.getTemp())
    }
  }
</script>

<style scoped>

</style>
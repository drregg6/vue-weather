<template>
  <div v-on:click="onClick" class="temp">
    <p v-if="cels === true">
      {{ kelvinToCelsius(getTemp) }}
    </p>
    <p v-else>
      {{ kelvinToFahr(getTemp) }}
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import kelvinToCelsius from '../../helpers/kelvinToCelsius';
  import kelvinToFahr from '../../helpers/kelvinToFahr';

  export default {
    name: "WeatherTemp",
    computed: mapGetters(["getTemp"]),
    methods: {
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
  display: block;
  width: max-content;
  margin: .5rem auto;
}

p {
  font-size: 2rem;
  margin: 0;
}
</style>
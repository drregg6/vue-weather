<template>
  <div>
    <div v-if="getLocation"><h1>{{ getLocation }}, {{ getCountry }}</h1></div>
    <div v-else><h1>Finding location...</h1></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "WeatherHeader",
    computed: mapGetters(["getLocation", "getCountry"])
  }
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
  @media  only screen and (max-width: 500px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
</style>
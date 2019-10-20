<template>
  <div>
    <div v-if="getLocation"><h1>{{ getLocation }}</h1></div>
    <div v-else><h1>Finding location...</h1></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "WeatherHeader",
    computed: mapGetters(["getLocation"])
  }
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
</style>
<template>
  <div>
    <h1>{{ getLocation() }}</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "WeatherHeader",
    methods: mapGetters(["getLocation"])
  }
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
</style>
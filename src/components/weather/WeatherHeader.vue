<template>
  <div>
    <h1 v-if="getLocation">{{ getLocation }}</h1>
    <h1 v-else>Finding Location</h1>
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
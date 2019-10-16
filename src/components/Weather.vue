<template>
  <div class="weather">
    <h1>Weather goes here</h1>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "Weather",
    computed: mapGetters(["getState"]),
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
  background: yellow;
}
</style>
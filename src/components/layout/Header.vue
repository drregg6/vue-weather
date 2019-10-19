<template>
  <header>
    <h1>Weather App</h1>
    <img :src="src" />
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "Header",
    computed: mapGetters(["getGiphy"]),
    methods: mapActions(["findGiphy"]),
    created() {
      this.findGiphy();
    },
    data() {
      return {
        src: this.getGiphy // returns undefined
      }
    }
  }
</script>

<style scoped>
header {
  padding: 5rem 0;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  letter-spacing: .2rem;
  text-align: center;
}

img {
  width: 100%;
  height: auto;
}
</style>
<template>
  <header>
    <h1>Weather App</h1>
    <p>
      <img :src="src">
    </p>
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
      this.src = this.getGiphy;
    },
    data() {
      return {
        src: ''
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
  margin: 0 auto;
  text-align: center;
  width: 250px;
  height: 250px;
}
</style>
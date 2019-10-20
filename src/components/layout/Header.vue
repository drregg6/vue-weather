<template>
  <header>
    <h1>Weather App</h1>
    <div v-if="getGiphy">
      <img :src='source'>
    </div>
    <div v-else>
      <p>Loading</p>
    </div>
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
    updated() {
      this.source = this.getGiphy;
    },
    data() {
      return {
        source: ""
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
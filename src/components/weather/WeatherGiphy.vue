<template>
  <div class="giphy">
    <div v-if="getGiphy">
      <img :src="source">
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: "WeatherGiphy",
    computed: mapGetters(["getGiphy", "getId"]),
    methods: {
      ...mapActions(["searchGiphy"])
    },
    created() {
      this.searchGiphy(this.getId);
    },
    watch: {
      watchId(newValue, oldValue) {
        if (oldValue !== newValue) {
          this.source = this.searchGiphy(newValue);
        }
      }
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
img {
  width: 250px;
  height: auto;
}
</style>
/*

WATCH
might be the solution
https://dev.to/viniciuskneves/watch-for-vuex-state-changes-2mgj

*/

<template>
  <div class="weather-info">
    <p>
      {{ getMain }}
    </p>
    <p>
      {{ capitalize(getDesc) }}
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import capitalize from '../../helpers/capitalize';

  export default {
    name: "WeatherInfo",
    computed: {
      ...mapGetters(["getMain", "getDesc", "getState"])
    },
    methods: {
      capitalize
    }
  }
</script>

<style scoped>

</style>
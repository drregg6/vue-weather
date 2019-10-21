<template>
  <div class="main">
    <p class="headline">
      {{ getMain }}
    </p>
    <p class="desc">
      {{ capitalize(getDesc) }}
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import capitalize from '../../helpers/capitalize';
  export default {
    name: "WeatherMain",
    computed: mapGetters(["getDesc", "getMain"]),
    methods: {
      capitalize
    }
  }
</script>

<style scoped>
.main {
  margin: 0;
}
.headline {
  font-size: 1.15rem;
  margin: 0;
  font-weight: bold;
}
.desc {
  font-size: 1rem;
  margin: 0;
}
</style>
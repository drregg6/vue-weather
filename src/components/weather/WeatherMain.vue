<template>
  <div class="main">
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
    name: "WeatherMain",
    computed: mapGetters(["getDesc", "getMain"]),
    methods: {
      capitalize
    }
  }
</script>

<style scoped>

</style>
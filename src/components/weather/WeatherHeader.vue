<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
  export default {
    name: "WeatherHeader",
    props: ["name"]
  }
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
</style>
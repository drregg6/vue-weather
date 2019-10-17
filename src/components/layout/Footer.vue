<template>
  <footer>
    &copy; <a href="https://github.com/drregg6" target="_blank">Dave Regg</a>
  </footer>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
footer {
  padding: 2rem 0;
  margin: 1rem auto;
  margin-bottom: 0;
  background: darkblue;
  text-align: center;
  color: #fff;
}

a {
  color: lightcyan;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
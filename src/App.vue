<template>
  <div id="app">
    <div class="content">
      <Header />
      <Weather />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Weather from './components/Weather';
import Footer from './components/layout/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Weather,
    Footer
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
}

.content {
  max-width: 1100px;
  margin: 0 auto;
}
</style>

<template>
  <form v-on:submit="onSubmit">
    <input type="text" v-model="search" placeholder="City, State, or Zip">
    <input type="submit" value="Submit">
  </form>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        search: ''
      }
    },
    methods: {
      onSubmit: function(event) {
        event.preventDefault();
        // eslint-disable-next-line
        console.log(this.search);
        // Will search for new city

        this.search = '';
      }
    }
  }
</script>

<style scoped>
form {
  display: flex;

  margin: 0 auto;
  margin-bottom: 1rem;
}
input {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid black;
}
input[type="text"] {
  flex: 10;
  outline: 0;
}
input[type="submit"] {
  flex: 1;
  background: black;
  color: white;
  cursor: pointer;
}
input[type="submit"]:hover {
  background: #3c3c3c;
}
</style>
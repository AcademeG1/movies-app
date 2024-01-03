<template>
  <div id="app">
    <b-button>Кнопка</b-button>
    <b-button variant="danger">Кнопка</b-button>
    <b-button variant="success">Кнопка</b-button>
    <b-button variant="outline-primary">Кнопка</b-button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

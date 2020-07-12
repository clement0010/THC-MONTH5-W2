<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoComponent />
  </div>
</template>

<script>
import TodoComponent from "./components/todoComponent.vue";

export default {
  name: "App",
  components: {
    TodoComponent
  }
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

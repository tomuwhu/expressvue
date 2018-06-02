<template>
  <div id="app">
    <mvc msg="Gombtípusok"/>
  </div>
</template>

<script>
import mvc from './components/mvc.vue'
export default {
  name: 'app',
  components: {
    mvc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>

<template>
  <div id="app">
    <mvc msg="Szevasz én"/>
  </div>
</template>

<script>
import mvc from './components/index.vue'

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
  margin-top: 60px;
}
</style>

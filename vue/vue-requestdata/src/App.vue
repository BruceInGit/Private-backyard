<template>
  <div id="app">
    <requestdata></requestdata>
    <storage></storage>
  </div>
</template>

<script>
import requestdata from './components/requestdata.vue'
import storage from './components/storage'
export default {
  name: 'app',
  components: {
    requestdata,
    storage
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

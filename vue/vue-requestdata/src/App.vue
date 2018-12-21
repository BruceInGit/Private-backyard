<template>
  <div id="app">
    <requestdata></requestdata>
    
    <storage></storage>
   
    <parent></parent>
     <br>
    <apage></apage>
    <bpage></bpage>
  </div>
</template>

<script>
import requestdata from './components/requestdata.vue'
import storage from './components/storage.vue'
import parent from './components/transdata/parent.vue'
import apage from './components/transdata/apage.vue'
import bpage from './components/transdata/bpage.vue'
export default {
  name: 'app',
  components: {
    requestdata,
    storage,
    parent,
    apage,
    bpage,
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

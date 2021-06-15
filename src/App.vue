<template>
  <div id="app">
    <PokedexView/>
  </div>
</template>

<script>
import PokedexView from '@/views/PokedexView.vue'

export default {
  name: 'App',
  components: {
    PokedexView
  }
}
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

<template>
  <div id="app">
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
import Foot from '@/components/foot'
export default {
  name: 'App',
  components: {
    Foot
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
}
</style>

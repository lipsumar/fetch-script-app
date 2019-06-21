<template>
  <div id="app">
    <Browser/>
  </div>
</template>

<script>
import Browser from './components/Browser'
export default {
  name: 'App',
  components:{
    Browser
  }
}
</script>

<style>
*{box-sizing: border-box}
body{
  margin:0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

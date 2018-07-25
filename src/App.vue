<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{box-sizing: border-box}
html,body,#app{
  height: 100%;
}
body{
  margin:0;
  overflow: hidden;
  background-color: #212121;
  color:#76cdf4;
}
#app {
  font-family: 'Orbitron', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

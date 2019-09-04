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
body,html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  min-width: 1300px;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

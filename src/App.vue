<template>
  <Devices></Devices>
  <Downloads></Downloads>
  <HowTo></HowTo>
</template>

<script>
import Devices from './components/templates/Devices.vue'
import Downloads from './components/templates/Downloads.vue'
import HowTo from './components/templates/HowTo.vue'

export default {
  name: 'App',
  components: {
    Devices,
    Downloads,
    HowTo,
  }
}
</script>

<style lang="scss">
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

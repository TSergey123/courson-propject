<template>
  <v-header></v-header>
  <div class="wrapper">
      <router-view></router-view>
  </div>
</template>

<script>
import VHeader from "@/components/view/VHeader.vue"


export default {
  name: 'App',
  components: {
    VHeader,
  }
}
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100v;
}

.wrapper {
  margin: 0 auto;
  width: 80%;

}
</style>

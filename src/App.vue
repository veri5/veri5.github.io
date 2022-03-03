<template>
  <div id="app">
    <TheNavBar />

    <Jumbotron />
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue'
import Jumbotron from './components/Jumbotron.vue'

export default {
  name: 'App',
  components: {
    TheNavBar,
    Jumbotron,
  }
}
</script>
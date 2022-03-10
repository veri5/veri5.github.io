<template>
  <div id="app">
    <TheNavBar />
    <div id="main" class="my-5">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style>
  #app {
    font-family: roboto,sans-serif;
    background-color: #f7f8fa!important;
  }

  #main {
    padding: 75px 0 75px 0;
  }
</style>
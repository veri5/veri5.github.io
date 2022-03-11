<template>
  <div id="layout">
    <TheNavBar />

    <div id="main" class="my-5">
      <router-view />
    </div>
    
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from '../TheNavBar.vue'
import TheFooter from '../TheFooter.vue'

export default {
  name: "TheBaseLayout",
  components: {
    TheNavBar,
    TheFooter
  }
}
</script>

<style>
  #layout {
    font-family: roboto,sans-serif;
    background-color: #f7f8fa!important;
  }

  #main {
    padding: 75px 0 75px 0;
  }
</style>
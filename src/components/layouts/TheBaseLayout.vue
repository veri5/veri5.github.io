<template>
  <div id="layout">

    <div id="main" class="my-5">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: "TheNavLayout"
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
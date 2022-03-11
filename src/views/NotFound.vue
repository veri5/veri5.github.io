<template>
  <div>
    <vue-particles color="#000000" class="particles"></vue-particles>

    <b-container fluid class="section-xl">
      <b-row>
        <b-col cols="12" sm="12" md="8" lg=8 xl="6" offset-md="2" offset-lg="2" offset-xl="3" class="text-center bg-light">
          <h1 class="display-3">404</h1>
          <h1 class="">Page Not Found</h1>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
  .particles {
    position:absolute; 
    left:0; 
    right:0; 
    top:0; 
    bottom:0;
  }

  .section-xl {
    padding: 14rem !important;
  }
</style>
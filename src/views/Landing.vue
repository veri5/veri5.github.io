<template>
  <div>
    <vue-particles color="#000000" class="particles"></vue-particles>

    <b-container fluid class="section-xl">
      <b-row>
        <b-col cols="12" sm="12" md="8" lg=8 xl="6" offset-md="2" offset-lg="2" offset-xl="3" class="text-center bg-light">
          <h1 class="">Verifive</h1>
          <h1 class="display-3">Rules are not meant to be broken.</h1>
          <h5 class="mt-2 mb-4">Enabling the interoperability layer between multiple roots of trust.</h5>

          <b-button class="ml-auto" variant="dark" size="lg" disabled>Launch Demo</b-button>
          <p class="text-secondary p-2">
            <b-icon icon="exclamation-triangle" variant="dark"></b-icon> Demo is not ready yet.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container id="about" fluid class="section-lg">
      <b-row>
        <b-col cols="12" sm="12" md="8" lg=8 xl="6" offset-md="2" offset-lg="2" offset-xl="3" class="text-center">
          <Markdown filepath="sections/about.md"/>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg=4 xl="6" offset-md="3" offset-lg="1" offset-xl="3" class="p-4">
          <b-container fluid>
            <b-row class="text-center">
              <b-col>
                <Markdown filepath="sections/values/secure.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/values/decentralised.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/values/trust_minimized.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/values/user_friendly.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/values/awesome.md"/>
              </b-col>
            </b-row>
          </b-container>
         </b-col>
      </b-row>
    </b-container>

    <b-container id="whitepaper" fluid class="section-lg">
      <b-row align-h="center">
        <b-col cols="12" sm="12" md="5" lg=5 xl="3" offset-md="1" offset-lg="1" offset-xl="1" align-self="center">
          <Markdown filepath="sections/whitepaper_lc.md"/>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg=6 xl="4">
          <Markdown filepath="sections/whitepaper_rc.md"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container id="tokenomics" fluid class="section-lg">
      <b-row align-h="center">
        <b-col cols="12" sm="12" md="6" lg=6 xl="4" offset-md="1" offset-lg="1" offset-xl="0">
          <Markdown filepath="sections/tokenomics_lc.md"/>
        </b-col>
        <b-col cols="12" sm="12" md="5" lg=4 xl="3" align-self="center"> 
          <Markdown filepath="sections/tokenomics_rc.md"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container id="team" fluid class="section-lg">
      <b-row>
        <b-col cols="12" sm="12" md="8" lg=8 xl="6" offset-md="2" offset-lg="2" offset-xl="3" class="text-center">
          <Markdown filepath="sections/team.md"/>
        </b-col>
        <b-col cols="12" sm="12" md="6" lg=4 xl="6" offset-md="3" offset-lg="1" offset-xl="3" class="p-2">
          <b-container fluid>
            <b-row class="text-center">
              <b-col>
                <Markdown filepath="sections/team/micha_roon.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/team/mahir_senturk.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/team/pablo_buitrago.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/team/ezequiel_aranda.md"/>
              </b-col>
              <b-col>
                <Markdown filepath="sections/team/michal_bacia.md"/>
              </b-col>
            </b-row>
          </b-container>
         </b-col>
      </b-row>
    </b-container>

    <b-container id="join" fluid class="section-lg">
      <b-row>
        <b-col cols="12" sm="12" md="6" lg=6 xl="4" offset-md="3" offset-lg="3" offset-xl="4" class="text-center">
          <Markdown filepath="sections/join.md"/>
        </b-col>
      </b-row>
    </b-container>

    <b-container id="roadmap" fluid class="section-lg">
      <b-row>
        <b-col cols="12" sm="12" md="8" lg=8 xl="6" offset-md="2" offset-lg="2" offset-xl="3" class="text-center">
          <Markdown filepath="sections/roadmap_lc.md"/>
        </b-col>
        <b-col cols="12" sm="12" md="8" lg=8 xl="6" offset-md="2" offset-lg="2" offset-xl="3" class="text-center">
          <Markdown filepath="sections/roadmap_rc.md"/>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue'

export default {
  name: 'LandingPage',
  components: {
    Markdown,
  }
}
</script>

<style scoped>
  .particles {
    position:absolute; 
    left:0; 
    right:0; 
    top:0; 
    bottom:30%;
  }

  .section-lg {
    padding: 3rem !important;
  }

  .section-xl {
    padding: 6rem !important;
  }

  .box-shadow {
    -webkit-box-shadow: 0px -10px 10px 0px #000000; 
    box-shadow: 0px -10px 10px 0px #000000;
  }
</style>
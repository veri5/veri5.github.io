<template>
  <div>
    <b-navbar class="p-3" toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand tag="p" class="m-0 pr-0">
        <!-- <img src="logos/v1/40.png" class="mb-1 pr-1" alt="verifive"> -->
        V<strong>5</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav class="ml-auto pl-2"> // Until Demo launch-->
        <b-navbar-nav class="m-auto">
          <b-nav-item :to="{ name: 'Landing', hash: '#about' }">About</b-nav-item>
          <b-nav-item :to="{ name: 'Landing', hash: '#whitepaper' }">Whitepaper</b-nav-item>
          <b-nav-item :to="{ name: 'Landing', hash: '#tokenomics' }">Tokenomics</b-nav-item>
          <b-nav-item :to="{ name: 'Landing', hash: '#team' }">Team</b-nav-item>
          <b-nav-item :to="{ name: 'Landing', hash: '#roadmap' }">Roadmap</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <!-- <b-collapse is-nav>
        <b-button class="ml-auto" variant="outline-light" disabled>Launch Demo</b-button>
      </b-collapse> // Until Demo launch-->

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar'
}
</script>

<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <b-row class="p-2" align-h="around" style="height: 90vh;" align-v="center">
      <b-col cols="12" xs="12" md="6" class="justify-content-center">
        <b-jumbotron
          container-fluid="true"
          style="background-color: transparent;"
        >
          <template v-slot:header>{{ title }}</template>

          <template v-slot:lead><p class="pl-2">{{ slogan }}</p></template>

        </b-jumbotron>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "The Trust Protocol,",
      slogan: "Rules are not meant to be broken.",
      message: "Enabling the interoperability layer between multiple roots of trust."
    };
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: #a8c0ff;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0);
    opacity: 1;
    border-radius: 100%;
  }

  100% {
    transform: translateY(-1000px);
    opacity: 0;
    border-radius: 100%;
  }
}
</style>

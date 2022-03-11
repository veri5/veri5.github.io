<template>
  <div id="app">
    <component :is="activeLayout" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TheBaseLayout: () => import('@/components/layouts/TheBaseLayout.vue'),
    TheNavLayout: () => import('@/components/layouts/TheNavLayout.vue'),
  },
  computed: {
    ...mapState('app', [
      'activeLayout',
    ]),
  },
}
</script>
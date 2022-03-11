import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'ComingSoon' } 
  },
  {
    path: '/',
    name: 'ComingSoon',
    component: () => import(/* webpackChunkName: "coming-soon." */ '@/views/ComingSoon.vue'),
    meta: {
      layout: 'theBaseLayout',
    },
  },
  {
    path: '/landing',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "landing" */ '@/views/Landing.vue'),
    meta: {
      layout: 'theNavLayout',
    },
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
    meta: { 
      layout: 'theBaseLayout' 
    },
  },
]

// Changes layout as specify in router meta
const requiresLayout = (to, from, next) => {
  const { activeLayout, layouts } = store.state.app

  to.matched.map(({ meta }) => {
    const newLayout = meta.layout

    if (newLayout && activeLayout !== newLayout) {
      // console.warn(`Updating layout in store to ${layouts[newLayout]}`)
      store.commit('app/setActiveLayout', layouts[meta.layout])
    }
    return meta
  })

  next()
}

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            offset: { x: 0, y: 60 },
            behavior: 'smooth',
          });
        }, 100);
      });
    }
  }
})

// setting nav guards
router.beforeEach(requiresLayout)

export default router

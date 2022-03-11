const state = {
  activeLayout: '',
  layouts: {
    theBaseLayout: 'the-base-layout',
    theNavLayout: 'the-nav-layout',
  },
}

const mutations = {
  setActiveLayout (state, layout) {
    state.activeLayout = layout
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

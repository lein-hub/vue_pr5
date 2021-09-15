const state = {
  items: [
    {title: 'Dashboard', to:'/'},
    {title: 'News', to:'/news'},
    {title: 'World', items: [
      {title: 'Introduction', to:'/introduction'},
      {title: 'Character', to:'/character'},
      {title: 'Keyword', to:'/keyword'},
    ]},
    {title: 'Cast & Staff', to:'/caststaff'},
    {title: 'Event', to:'/event'},
    {title: 'Media', items: [
      {title: 'Music', to:'/music'},
      {title: 'Movie', to:'/movie'},
      {title: 'Comic', to:'/comic'},
    ]},
    {title: 'Goods', to:'/goods'},
    {title: 'Guidelines', to:'/guidelines'},
  ],
  drawer: false,
}

const getters = {
  getDrawer: state => state.drawer
}

const mutations = {
  setDrawer (state, data) {
    state.drawer = data
  }
}

const actions = {
  toggleDrawer ({commit}, value) {
    commit('setDrawer', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

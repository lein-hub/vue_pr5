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
    {title: 'Guideline', to:'/guideline'},
  ],
  drawer: true,
}

const getters = {
  getDrawer: state => state.drawer
}

const mutations = {

}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

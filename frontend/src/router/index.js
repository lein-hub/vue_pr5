import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => System.import(/* webpackChunkName: "Index" */ '@/layouts/default/Index'),
    children: [
      {
        path: '/news',
        name: 'News',
        // component: () => System.import(/* webpackChunkName: "about" */ '@/views/News'),
      },
      {
        path: '/introduction',
        name: 'Introduction',
        component: null,
      },
      {
        path: '/character',
        name: 'Character',
        component: null,
      },
      {
        path: '/keyword',
        name: 'Keyword',
        component: null,
      },
      {
        path: '/caststaff',
        name: 'Cast & Staff',
        component: null,
      },
      {
        path: '/event',
        name: 'Event',
        component: null,
      },
      {
        path: '/music',
        name: 'Music',
        component: null,
      },
      {
        path: '/movie',
        name: 'Movie',
        component: null,
      },
      {
        path: '/comic',
        name: 'Comic',
        component: null,
      },
      {
        path: '/goods',
        name: 'Goods',
        component: null,
      },
      {
        path: '/guideline',
        name: 'Guideline',
        component: null,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

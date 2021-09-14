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
        component: () => System.import(/* webpackChunkName: "News" */ '@/views/News'),
      },
      {
        path: '/introduction',
        name: 'Introduction',
        component: () => System.import(/* webpackChunkName: "Introduction" */ '@/views/Introduction'),
      },
      {
        path: '/character',
        name: 'Character',
        component: () => System.import(/* webpackChunkName: "Character" */ '@/views/Character'),
      },
      {
        path: '/keyword',
        name: 'Keyword',
        component: () => System.import(/* webpackChunkName: "Keyword" */ '@/views/Keyword'),
      },
      {
        path: '/caststaff',
        name: 'Cast & Staff',
        component: () => System.import(/* webpackChunkName: "CastStaff" */ '@/views/CastStaff'),
      },
      {
        path: '/event',
        name: 'Event',
        component: () => System.import(/* webpackChunkName: "Event" */ '@/views/Event'),
      },
      {
        path: '/music',
        name: 'Music',
        component: () => System.import(/* webpackChunkName: "Music" */ '@/views/Music'),
      },
      {
        path: '/movie',
        name: 'Movie',
        component: () => System.import(/* webpackChunkName: "Movie" */ '@/views/Movie'),
      },
      {
        path: '/comic',
        name: 'Comic',
        component: () => System.import(/* webpackChunkName: "Comic" */ '@/views/Comic'),
      },
      {
        path: '/goods',
        name: 'Goods',
        component: () => System.import(/* webpackChunkName: "Goods" */ '@/views/Goods'),
      },
      {
        path: '/guidelines',
        name: 'Guidelines',
        component: () => System.import(/* webpackChunkName: "Guidelines" */ '@/views/Guidelines'),
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

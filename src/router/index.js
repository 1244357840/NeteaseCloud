import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Discover = () => import('views/discover/Discover.vue')
const TopList = () => import('views/discover/toplist/TopList.vue')
const PlayList = () => import('views/discover/playlist/PlayList.vue')
const Album = () => import('views/discover/album/Album.vue')
const Artist = () => import('views/discover/artist/Artist.vue')
const Djradio = () => import('views/discover/djradio/Djradio.vue')
const Recommend = () => import('views/discover/recommend/Recommend.vue')

const routes = [{
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    component: Discover,
    children: [{
        path: '/',
        component: Recommend
      },{
        path: 'toplist',
        component: TopList
      },
      {
        path: 'playlist',
        component: PlayList
      },
      {
        path: 'album',
        component: Album
      },
      {
        path: 'artist',
        component: Artist
      },
      {
        path: 'djradio',
        component: Djradio
      },
    ]
  },
  // {
  //   path: '/discover/toplist',
  //   component: TopList
  // },
  // {
  //   path: '/discover/playlist',
  //   component: PlayList
  // },
  // {
  //   path: '/discover/album',
  //   component: Album
  // },
  // {
  //   path: '/discover/artist',
  //   component: Artist
  // },
  // {
  //   path: '/discover/djradio',
  //   component: Djradio
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

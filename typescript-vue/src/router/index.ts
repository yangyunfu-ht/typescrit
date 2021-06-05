import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../layout/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/found',
    component: Layout,
    children: [
      {
        path: '',
        // name: 'found',
        component: () => import('../views/found/index.vue'),
        children: [
          {
            path: '',
            name: 'recommend',
            component: () => import('../views/found/components/recommend/index.vue')
          },
          {
            path: 'songList',
            name: 'songList',
            component: () => import('../views/found/components/songList/index.vue')
          },
          {
            path: 'radioStation',
            name: 'radioStation',
            component: () => import('../views/found/components/radioStation/index.vue')
          },
          {
            path: 'leaderBoard',
            name: 'leaderBoard',
            component: () => import('../views/found/components/leaderBoard/index.vue')
          },
          {
            path: 'newSong',
            name: 'newSong',
            component: () => import('../views/found/components/newSong/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/mv',
    component: Layout,
    children: [
      {
        path: '',
        // name: 'mv',
        component: () => import('../views/mv/index.vue'),
        children: [
          {
            path: '',
            name: 'featurred',
            component: () => import('../views/mv/components/featured/index.vue')
          },
          {
            path: 'exclusive',
            name: 'exclusive',
            component: () => import('../views/mv/components/exclusive/index.vue')
          },
          {
            path: 'all',
            name: 'all',
            component: () => import('../views/mv/components/all/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/mine',
    component: Layout,
    children: [
      {
        path: '',
        name: 'mine',
        component: () => import('../views/mine/index.vue')
      }
    ]
  },
  {
    path: '/firend',
    component: Layout,
    children: [
      {
        path: '',
        name: 'firend',
        component: () => import('../views/firend/index.vue')
      }
    ]
  },
  {
    path: '/account',
    component: Layout,
    children: [
      {
        path: '',
        name: 'account',
        component: () => import('../views/account/index.vue')
      }
    ]
  },
  {
    path: '/private',
    name: 'private',
    component: () => import('../views/private/index.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return { x:0 ,y:0 } 
  }
})

export default router

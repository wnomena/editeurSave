import { createRouter, createWebHistory } from 'vue-router'
import nomena from '@/components/auth/nomena.vue'

const routes = [
  {
    path: '/',
    name: 'nomena',
    component: nomena
  },
  {
    path : '/sign-up',
    name : 'signup',
    component : () =>import('@/components/auth/signup.vue')
  },
  {
    path: '/ajouter',
    name : 'ajouter',
    component : () => import('@/components/ajouter.vue')
  },
  {
    path : '/personnal',
    name : 'donner',
    component : () => import('@/components/donnerList.vue')
  },
  {
    path :'/search',
    name : 'list',
    component : () => import('@/components/liste.vue')
  },
  // {
  //   path : "search/result",
  //   name : 'list',
  //   component : () => import('@/components/liste.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

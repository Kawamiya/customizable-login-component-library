import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Amazon from '../packages/Amazon.vue'
import Github from '../packages/Github.vue'
import NormalLateral from '../views/NormalLateral.vue'
import Google from '../packages/Google.vue'
import testNPM from '../views/testNPM.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: "/Amazon"
  },
  {
    path: '/Amazon',
    name: 'Amazon',
    component: Amazon
  },
  {
    path: '/Github',
    name: 'Github',
    component: Github
  },
  {
    path: '/NormalLateral',
    name: 'NormalLateral',
    component: NormalLateral
  },
  {
    path: '/Google',
    name: 'Google',
    component: Google
  },
  {
    path: '/testNPM',
    name: 'testNPM',
    component: testNPM
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

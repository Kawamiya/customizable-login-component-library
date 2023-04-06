import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NormalCentral from '../views/NormalCentral.vue'
import NormalFull from '../views/NormalFull.vue'
import NormalLateral from '../views/NormalLateral.vue'
import GoogleCentral from '../views/GoogleCentral.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: NormalCentral
  },
  {
    path: '/NormalCentral',
    name: 'NormalCentral',
    component: NormalCentral
  },
  {
    path: '/NormalFull',
    name: 'NormalFull',
    component: NormalFull
  },
  {
    path: '/NormalLateral',
    name: 'NormalLateral',
    component: NormalLateral
  },
  {
    path: '/GoogleCentral',
    name: 'GoogleCentral',
    component: GoogleCentral
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

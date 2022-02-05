import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Private from '../pages/Private.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/private',
    component: Private,
    name: 'Private',
    component: () => import(/* webpackChunkName: "private" */ '../pages/Private.vue')
  },
  //{
   // path: '/about',
   // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
 // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

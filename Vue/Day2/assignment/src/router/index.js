import Vue from 'vue'
import VueRouter from 'vue-router'
import friedChicken from '../views/FriedChicken.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/friedChicken',
    name: 'FriedChicken',
    component: friedChicken
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

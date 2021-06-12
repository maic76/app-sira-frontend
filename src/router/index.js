import Vue from 'vue'
import VueRouter from 'vue-router'
import Ingresar from '../views/usuarios/Ingresar.vue'
import Confirmado from '@/views/usuarios/Confirmado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ingresar',
    component: Ingresar
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/confirmado',
    name: 'Confirmado',
    component: Confirmado
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Ingresar from '../views/usuarios/Ingresar.vue'
import Confirmado from '@/views/usuarios/Confirmado.vue'
import CRUDConvocatorias from '@/components/CRUDConvocatorias.vue'
import CRUDProgEducativos from '@/components/CRUDProgEducativos.vue'
import CRUDRequisitos from '@/components/CRUDRequisitos.vue'

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
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
       children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'convocatorias',
          component: CRUDConvocatorias
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'peducativos',
          component: CRUDProgEducativos
        },
         {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'requisitos',
          component: CRUDRequisitos
        }
      ]
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

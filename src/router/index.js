import Vue from 'vue'
import VueRouter from 'vue-router'
import Ingresar from '../views/usuarios/Ingresar.vue'
import Confirmado from '@/views/usuarios/Confirmado.vue'
import CRUDConvocatorias from '@/components/CRUDConvocatorias.vue'
import CRUDProgEducativos from '@/components/CRUDProgEducativos.vue'
import CRUDRequisitos from '@/components/CRUDRequisitos.vue'
import ListadoConvocatorias from '@/components/ListadoConvocatorias.vue'
import ConvocatoriaDetalle from '@/components/ConvocatoriaDetalle.vue'
import MisConvocatorias from '@/components/MisConvocatorias.vue'

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
          // Convocatorias will be rendered inside Home's <router-view>
          // when /user/:id/profile is matched
          path: 'convocatorias',
          component: CRUDConvocatorias
        },
        {
          // Peducativos will be rendered inside Home's <router-view>
          // when /user/:id/posts is matched
          path: 'peducativos',
          component: CRUDProgEducativos
        },
         {
          // Requisitos will be rendered inside Home's <router-view>
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
  {
    path: '/aspirantes/convocatorias',
    name: 'ListadoConvocatorias',
    component: ListadoConvocatorias

  },
   {
    path: '/aspirantes/convocatorias/detalle',
    name: 'ConvocatoriaDetalle',
    component: ConvocatoriaDetalle

  },
   {
    path: '/aspirantes/misconvocatorias',
    name: 'MisConvocatorias',
    component: MisConvocatorias

  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

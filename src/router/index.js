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
import Participacion from '@/components/Participacion.vue'
import AspirantesConvocatoria from '@/components/AspirantesPorConvocatoria.vue'
import ParticipacionValidaDocs from '@/components/ParticipacionValidaDocs.vue'
//import MaterialChartCard from '@/components/MaterialChartCard.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'

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
    path: '/aspirantes/convocatorias/detalle',
    name: 'ConvocatoriaDetalle',
    component: ConvocatoriaDetalle

  },
   
  
 
    {
    path: '/aspirantes',
    name: 'Aspirantes',
    component: () => import(/* webpackChunkName: "home" */ '../views/Aspirantes.vue'),
       children: [
        
        {
           path: 'convocatorias',           
            component: ListadoConvocatorias
        },
        {
          path: 'misparticipaciones',          
          component: MisConvocatorias
        },
        {
          path: 'participacion/:id',
          name: 'Participacion',
          component: Participacion

         },
        
      ]
  },

    {
    path: '/seguimiento',
    name: 'Seguimiento',
    component: () => import(/* webpackChunkName: "home" */ '../views/Seguimiento.vue'),
       children: [
        
        {
           path: 'dashboard',           
           name: 'DashboardDashboard',
          component: Dashboard
        },
         {
            path: 'convocatoria/:id',
            name: 'AspirantesConvocatoria',
            component: AspirantesConvocatoria

          },
         
          {
            path: 'convocatoria/participacion/:id',
            name: 'ParticipacionValidaDocs',
            component: ParticipacionValidaDocs

          }
               
      ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import FormComponent from './components/commons/FormComponent'
import PageErrorComponent from './components/commons/PageErrorComponent'
import HomeComponent from './components/HomeComponent'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  // {
  //   path: '/:token',
  //   name: 'moodle',
  //   component: HomeComponent,
  // },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: HomeComponent,
  //   children: [
  //     {
  //       path: 'usuarios',
  //       name: 'usuarios',
  //       component: UsuariosComponent,
  //       children: [
  //         {
  //           path: 'form',
  //           name: 'form',
  //           component: FormComponent,
  //           props: route => ({ Tipo: route.query.Tipo, Clase: route.query.Clase, Inputs: route.query.Inputs, Datos: route.query.Datos,Url: route.query.Url })      
  //         },
  //         {
  //           path: 'error',
  //           name: 'error',
  //           component: PageErrorComponent,
  //           props: route => ({ Codigo: route.state.Codigo, Mensaje: route.state.Mensaje, Descripcion: route.state.Descripcion}) 
  //         },

  //       ]
  //     },
  //   ]
  // },
  {
    path: '/form/:id/:rty',
    name: 'form',
    component: FormComponent,
    props: true
  },
  {
    path: '/error',
    name: 'error',
    component: PageErrorComponent,
  }

]
     
const Router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default Router
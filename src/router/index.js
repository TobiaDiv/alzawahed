import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Security from '../views/Security.vue'
import Logistics from '../views/Logistics.vue'
import It from '../views/It.vue'
import Clearance from '../views/Clearance.vue'
import Contarcting from '../views/Contarcting.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/security',
    name: 'security',
    component: Security
  },
  {
    path: '/logistics',
    name: 'logistics',
    component: Logistics
  },
  {
    path: '/it',
    name: 'it',
    component: It
  },
  {
    path: '/clearance',
    name: 'clearance',
    component: Clearance
  },
  {
    path: '/contarcting',
    name: 'contarcting',
    component: Contarcting
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

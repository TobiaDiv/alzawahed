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
    name: 'Home',
    component: Home
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: Logistics
  },
  {
    path: '/it',
    name: 'It',
    component: It
  },
  {
    path: '/clearance',
    name: 'Clearance',
    component: Clearance
  },
  {
    path: '/contarcting',
    name: 'Contarcting',
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

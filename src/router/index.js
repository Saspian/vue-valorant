import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Agents from '../views/Agents.vue';
import AgentDetails from '../views/AgentDetails.vue';
import Weapons from '../views/Weapons.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents
  },
  {
    path: '/agents/:id',
    name: 'AgentDetails',
    component: AgentDetails
  },
  {
    path: '/weapons',
    name: 'Weapons',
    component: Weapons
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;

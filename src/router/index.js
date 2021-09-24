import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AgentDetail from '../views/AgentDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agents/:id',
    name: 'Agent',
    component: AgentDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

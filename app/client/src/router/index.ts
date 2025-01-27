import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/details/:id(\\d+)',
      name: 'details',
      component: () => import('../views/TemplateDetails.vue'),
    },
    {
      path: '/generated',
      name: 'generated',
      component: () => import('../views/TemplateGenerated.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('../views/PageNotFount.vue')
    },
  ],
})

export default router

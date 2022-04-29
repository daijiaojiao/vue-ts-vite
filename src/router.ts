import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/page1',
    component: () => import('./pages/page1.vue'),
  },
  {
    path: '/page2',
    component: () => import('./pages/page2.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

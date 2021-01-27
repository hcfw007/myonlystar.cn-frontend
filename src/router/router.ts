import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Index,
  }],
})
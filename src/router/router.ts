import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import BlogDetail from '../views/blog/BlogDetail.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Index,
  }, {
    path: '/pages/blog/:id',
    component: BlogDetail,
  }],
})
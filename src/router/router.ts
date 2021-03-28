import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import BlogDetail from '../views/blog/BlogDetail.vue'
import BlogEditor from '../views/blog/BlogEditor.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Index,
  }, {
    path: '/pages/blog/:id',
    component: BlogDetail,
  }, {
    path: '/pages/blog/edit/:id?',
    component: BlogEditor,
  }],
})
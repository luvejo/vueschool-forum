import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage'
import ThreadShowPage from '@/pages/ThreadShowPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/threads/:id',
    name: 'ThreadShow',
    component: ThreadShowPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

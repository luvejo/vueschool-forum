import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import NotFound from '@/pages/NotFound'
import Category from '@/pages/Category'
import Forum from '@/pages/Forum'
import srcData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories/:id',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/forums/:id',
    name: 'Forum',
    component: Forum,
    props: true
  },
  {
    path: '/threads/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true,
    beforeEnter: (to, from, next) => {
      const threadExists = srcData.threads.find(
        thread => thread.id === to.params.id
      )

      if (threadExists) {
        return next()
      }

      next({
        name: 'NotFound',
        params: { pathMatch: to.path.substring(1).split('/') },
        query: to.query,
        hash: to.hash
      })
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

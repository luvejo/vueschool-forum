import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage'
import ThreadShowPage from '@/pages/ThreadShowPage'
import NotFoundPage from '@/pages/NotFoundPage'
import srcData from '@/data.json'

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
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home'
import ThreadShow from '@/pages/ThreadShow'
import ThreadCreate from '@/pages/ThreadCreate'
import NotFound from '@/pages/NotFound'
import Category from '@/pages/Category'
import Forum from '@/pages/Forum'
import Profile from '@/pages/Profile'
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
    path: '/me',
    name: 'Profile',
    component: Profile,
    meta: {
      toTop: true,
      smoothScroll: true
    }
  },
  {
    path: '/me/edit',
    name: 'ProfileEdit',
    component: Profile,
    props: {
      edit: true
    }
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
    path: '/forums/:forumId/threads/new',
    name: 'ThreadCreate',
    component: ThreadCreate,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    const scroll = {}

    if (to.meta.toTop) scroll.top = 0
    if (to.meta.smoothScroll) scroll.behavior = 'smooth'

    return scroll
  }
})

export default router

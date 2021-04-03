import { createStore } from 'vuex'

import data from '@/data'

export default createStore({
  state: {
    ...data,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },

  getters: {
    authUser (state) {
      const user = state.users.find(user => user.id === state.authId)

      if (!user) return null

      return {
        ...user,

        get posts () {
          return state.posts.filter(
            post => post.userId === user.id)
        },

        get postsCount () {
          return this.posts.length
        },

        get threads () {
          return state.threads.filter(
            thread => thread.userId === user.id)
        },

        get threadsCount () {
          return this.threads.length
        }
      }
    }
  },

  actions: {
    createPost ({ state, commit }, { post }) {
      post.id = 'ggqq' + Math.random()
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('appendPost', { post })
      commit('appendPostToThreads', {
        postId: post.id,
        threadId: post.threadId
      })
    },
    updateUser ({ commit }, user) {
      commit('updateUser', { data: user, userId: user.id })
    }
  },

  mutations: {
    updateUser (state, { data, userId }) {
      const userIndex = state.users.findIndex(user => user.id === userId)
      state.users[userIndex] = data
    },

    appendPost (state, { post }) {
      state.posts.push(post)
    },

    appendPostToThreads (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})

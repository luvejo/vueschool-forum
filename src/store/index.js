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
    async createThread ({ state, commit, dispatch }, { text, title, forumId }) {
      const publishedAt = Math.floor(Date.now() / 1000)
      const userId = state.authId
      const id = 'ggqq' + Math.random()

      const thread = { id, title, publishedAt, userId, forumId }

      commit('appendThread', { thread })
      commit('appendThreadToForum', { threadId: thread.id, forumId })
      commit('appendThreadToUser', { threadId: thread.id, userId })

      const post = { text, threadId: id }

      dispatch('createPost', { post })

      return state.threads.find(thread => thread.id === id)
    },
    createPost ({ state, commit }, { post }) {
      post.id = 'ggqq' + Math.random()
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('appendPost', { post })
      commit('appendPostToThread', {
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

    appendThread (state, { thread }) {
      state.threads.push(thread)
    },

    appendPost (state, { post }) {
      state.posts.push(post)
    },

    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts = thread.posts || []
      thread.posts.push(postId)
    },

    appendThreadToForum (state, { threadId, forumId }) {
      const forum = state.forums.find(forum => forum.id === forumId)
      forum.threads = forum.threads || []
      forum.threads.push(threadId)
    },

    appendThreadToUser (state, { threadId, userId }) {
      const user = state.users.find(user => user.id === userId)
      user.threads = user.threads || []
      user.threads.push(threadId)
    }
  }
})

import { createStore } from 'vuex'

import data from '@/data'

export default createStore({
  state: data,

  actions: {
    createPost ({ state, commit }, { post, threadId }) {
      post.id = 'ggqq' + Math.random()

      commit('appendPost', { post })
      commit('appendPostToThreads', {
        postId: post.id,
        threadId: post.threadId
      })
    }
  },

  mutations: {
    appendPost (state, { post }) {
      state.posts.push(post)
    },

    appendPostToThreads (state, { postId, threadId }) {
      const thread = state.threads.find(thread => thread.id === threadId)
      thread.posts.push(postId)
    }
  }
})

<template>
  <div class="col-full push-top">
    <h1>
      Editing <i>{{ thread.name }}</i>
    </h1>
    <ThreadEditor
      :initial-data="{ title, text }"
      @save="save"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import ThreadEditor from '@/components/ThreadEditor'

export default {
  components: { ThreadEditor },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread () {
      return this.$store.state.threads.find(
        thread => thread.id === this.id)
    },
    fistPost () {
      return this.$store.state.posts.find(
        post => post.id === this.thread.posts[0]
      )
    },
    title () {
      return this.thread.title
    },
    text () {
      return this.fistPost.text
    }
  },
  methods: {
    async save ({ title, text }) {
      const thread = await this.$store.dispatch(
        'updateThread',
        {
          id: this.id,
          title,
          text
        }
      )

      this.$router.push({
        name: 'ThreadShow',
        params: {
          id: thread.id
        }
      })
    },
    cancel () {
      this.$router.push({
        name: 'ThreadShow',
        params: { id: this.id }
      })
    }
  }
}
</script>

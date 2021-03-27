<template>
  <h1>{{ category.name }}</h1>
  <ForumList :forums="forums" :category="category" />
</template>

<script>
import ForumList from '@/components/ForumList'

export default {
  name: 'Category',
  components: { ForumList },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    category () {
      return this.$store.state.categories.find(category => category.id === this.id)
    },
    forums () {
      return this.$store.state.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>

<style>

</style>

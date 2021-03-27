<template>
  <ForumList v-for="category in categories" :key="category.id"
    :forums="forumsByCategory(category)"
    :category="category"
  />
</template>

<script>
import ForumList from '@/components/ForumList'

export default {
  components: { ForumList },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    forumsByCategory (category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style>

</style>

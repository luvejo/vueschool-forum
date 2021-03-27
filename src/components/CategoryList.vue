<template>
  <div v-for="category in categories" :key="category.id">
    <ForumList
      :forums="forumsByCategory(category)"
      :category="category"
    />
  </div>
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

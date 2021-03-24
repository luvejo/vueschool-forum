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
import srcData from '@/data.json'

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
      return srcData.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}
</script>

<style>

</style>

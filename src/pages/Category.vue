<template>
  <h1>{{ category.name }}</h1>
  <ForumList :forums="forums" :category="category" />
</template>

<script>
import ForumList from '@/components/ForumList'
import srcData from '@/data.json'

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
      return srcData.categories.find(category => category.id === this.id)
    },
    forums () {
      return srcData.forums.filter(forum => forum.categoryId === this.id)
    }
  }
}
</script>

<style>

</style>

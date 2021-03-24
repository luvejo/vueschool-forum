<template>
  <h1>Welcom to the forum</h1>

  <CategoryList :categories="categories" />
</template>

<script>
import CategoryList from '@/components/CategoryList'
import srcData from '@/data.json'

export default {
  name: 'Home',
  components: { CategoryList },
  data () {
    return {
      categories: srcData.categories
    }
  }
}
</script>

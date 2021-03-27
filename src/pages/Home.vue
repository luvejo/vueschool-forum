<template>
  <h1 class="push-top">Welcom to the forum</h1>
  <CategoryList :categories="categories" />
</template>

<script>
import { mapState } from 'vuex'

import CategoryList from '@/components/CategoryList'

export default {
  name: 'Home',
  components: { CategoryList },
  computed: mapState(['categories'])
}
</script>

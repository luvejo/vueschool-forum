<template>
  <h1>Welcom to the forum</h1>
  <ThreadList :threads="threads"/>
</template>

<script>
import ThreadList from '@/components/ThreadList'
import srcData from '@/data.json'

export default {
  name: 'HomePage',
  components: { ThreadList },
  data () {
    return {
      threads: srcData.threads
    }
  }
}
</script>

<style>

</style>

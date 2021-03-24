<template>
  <div class="col-full">
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea class="form-input" cols="30" rows="10" v-model="text"/>
      </div>
      <div class="form-actions">
        <button type="submit" class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const postId = 'ggqq' + Math.random()
      const post = {
        id: postId,
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: '38St7Q8Zi2N1SPa5ahzssq9kbyp1'
      }

      this.$emit('save', { post })
      this.text = ''
    }
  }
}
</script>

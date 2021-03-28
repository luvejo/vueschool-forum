<template>
  <div class="profile-card">
    <form @submit.prevent="save">
      <p class="text-center">
        <img :src="user.avatar" :alt="`${user.name} profile picture`" class="avatar-xlarge img-update">
      </p>

      <div class="form-group">
        <input type="text" v-model="formUser.username" placeholder="Username" class="form-input text-lead text-bold">
      </div>

      <div class="form-group">
        <input type="text" v-model="formUser.name" placeholder="Full Name" class="form-input text-lead">
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea class="form-input" id="user_bio" v-model="formUser.bio" placeholder="Write a few words about yourself."></textarea>
      </div>

      <div class="stats">
        <span>{{ user.postsCount }} posts</span>
        <span>{{ user.threadsCount }} threads</span>
      </div>

      <hr>

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input v-model="formUser.website" autocomplete="off" class="form-input" id="user_website">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input v-model="formUser.email" autocomplete="off" class="form-input" id="user_email">
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input v-model="formUser.location" autocomplete="off" class="form-input" id="user_location">
      </div>

      <div class="btn-group space-between">
        <button class="btn-ghost">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      formUser: { ...this.user }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('updateUser', { ...this.formUser })
    }
  }
}
</script>

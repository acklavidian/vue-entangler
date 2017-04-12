<template>
    <md-layout md-flex="90">
      <currentUser></currentUser>
      <currentPassword></currentPassword>
      <currentOwner></currentOwner>
      <currentRepo></currentRepo>
      <md-layout md-align="end">
        <md-button class="md-accent" @click.native="getIssue">Save</md-button>
      </md-layout>
    </md-layout>
</template>
<script>
  import currentUser from './settingsPage/currentUser'
  import currentPassword from './settingsPage/currentPassword'
  import currentOwner from './settingsPage/currentOwner'
  import currentRepo from './settingsPage/currentRepo'

  export default {
    methods: {
      getIssue (event) {
        this.$store.dispatch('getIssue')
      }
    },
    components: {
      currentUser,
      currentPassword,
      currentOwner,
      currentRepo
    }
  }
</script>

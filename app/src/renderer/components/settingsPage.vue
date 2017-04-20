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
  import * as types from '../vuex/mutation-types'

  export default {
    methods: {
      getIssue (event) {
        this.$store.dispatch(types.USER_SETTINGS_SAVE)
        this.$store.dispatch(types.GITHUB_GET_ISSUE)
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

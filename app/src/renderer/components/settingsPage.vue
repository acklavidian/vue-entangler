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

  // Fetch repo info
  var Octokat = require('octokat')
  var octo = new Octokat({
    username: 'acklavidian@gmail.com',
    password: 'Iam31pp3.'
  })

  var repo = octo.repos('acklavidian', 'entangler')

  repo.issues.fetch().then((a) => {
    console.log(a.items[0].body)
    this.branches = a.items[0].body
    console.log('this', this.branches)
  })

  export default {
    data () {
      return {
        branches: 'nil'
      }
    },
    components: {
      currentUser,
      currentPassword,
      currentOwner,
      currentRepo
    },
    methods: {
      getIssue (event) {
        this.$store.dispatch('getIssue')
      }
    }
  }
</script>
<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

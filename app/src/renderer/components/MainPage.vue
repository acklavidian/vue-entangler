<template>
  <md-layout  md-align="center">
    <issue></issue>
  </md-layout>
</template>

<script>
import issue from './MainPage/issue'
import store from 'renderer/vuex/store.js'

console.log(store.state)

  // Fetch repo info
export default {
  components: {
    issue: issue
  },
  name: 'main-page'
}
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

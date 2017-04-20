<template>
  <md-input-container  md-inline>
    <label> username:  </label>
      <md-input type='text' @input="setUser" :value="username"></md-input>
  </md-input-container>
</template>

<script>
import * as types from '../../vuex/mutation-types'

export default {
  computed: {
    username: data => data.$store.state.userSettings.username
  },
  methods: {
    setUser (value) {
      this.$store.commit(types.GITHUB_SET_USERNAME, value)
    }
  }
}
</script>

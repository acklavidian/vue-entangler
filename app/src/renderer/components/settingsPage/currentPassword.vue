<template>
  <md-input-container md-has-password md-inline>
    <label>password:</label>
      <md-input type='password' @input="setPassword" :value="password"></md-input>
  </md-input-container>
</template>

<script>
import * as types from '../../vuex/mutation-types'

export default {
  computed: {
    password: data => data.$store.state.userSettings.password
  },
  methods: {
    setPassword (value) {
      this.$store.commit(types.GITHUB_SET_PASSWORD, value)
    }
  }
}
</script>

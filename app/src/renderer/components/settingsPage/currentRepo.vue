<template>
  <md-input-container  md-inline>
    <label> repo:  </label>
      <md-input type='text' @input="setRepo"></md-input>
  </md-input-container>
</template>
<script>
import * as types from '../../vuex/mutation-types'

export default {
  methods: {
    setRepo (value) {
      this.$store.commit(types.GITHUB_SET_REPO, value)
    }
  }
}
</script>

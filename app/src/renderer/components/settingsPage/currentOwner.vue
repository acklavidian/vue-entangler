<template>
  <md-input-container md-inline>
    <label> owner:  </label>
      <md-input type='text' @input="setOwner" :value="owner"></md-input>
  </md-input-container>
</template>

<script>
import * as types from '../../vuex/mutation-types'

export default {
  computed: {
    owner: data => data.$store.state.userSettings.owner
  },
  methods: {
    setOwner (value) {
      this.$store.commit(types.GITHUB_SET_OWNER, value)
    }
  }
}
</script>

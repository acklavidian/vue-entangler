<template>
    <md-input-container md-inline>
      <label> owner:  </label>
      <md-input type='text' @click.native="setDirectory" :value="directory"></md-input>
    </md-input-container>
</template>

<script>
import * as types from '../../vuex/mutation-types'

export default {
  computed: {
    directory: data => data.$store.state.userSettings.owner
  },
  methods: {
    setDirectory (value) {
      const {dialog} = require('electron').remote
      let directory = dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
      this.$store.commit(types.GITHUB_SET_OWNER, directory)
    }
  }
}
</script>

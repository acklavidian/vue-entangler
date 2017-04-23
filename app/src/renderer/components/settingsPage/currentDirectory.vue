<template>
    <md-input-container md-inline>
      <label> owner:  </label>
      <md-input type='text' :value="directory"></md-input>
      <md-button @click.native="setDirectory" class="md-icon-button">
        <md-icon>folder_open</md-icon>
      </md-button>
    </md-input-container>
</template>

<script>
import * as types from '../../vuex/mutation-types'

export default {
  computed: {
    directory: data => data.$store.state.userSettings.directory
  },
  methods: {
    setDirectory (value) {
      const {dialog} = require('electron').remote
      let directory = dialog.showOpenDialog({properties: ['openDirectory']})
      directory = Array.isArray(directory) ? directory[0] : ''
      this.$store.commit(types.USER_SETTINGS_DIRECTORY, directory)
    }
  }
}
</script>

<template>
  <div class="app" id="#app">
    <md-toolbar class="md-transparent">

     <md-button @click.native="toggleSideNav" class="md-icon-button md-accent" to="settings" >
        <md-icon>settings</md-icon>
      </md-button>

      <h2 class="md-title md-accent">
        Entangler
      </h2>

    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large md-transparent">
        <div class="md-toolbar-container">
          <h3 class="md-title">Settings</h3>
        </div>
      </md-toolbar>
      <md-layout md-align="center" md-gutter="16">
        <settingsPage></settingsPage>
      </md-layout>

    </md-sidenav>
    <md-layout>
      <router-view></router-view>
    </md-layout>
  </div>
</template>

<script>
  import settingsPage from 'renderer/components/settingsPage'
  import * as types from 'renderer/vuex/mutation-types'
  import store from 'renderer/vuex/store'

  store.dispatch(types.USER_SETTINGS_LOAD)

  window.onfocus = window.onload = () => {
    if (store.state.userSettings.username !== '') {
      store.dispatch(types.GIT_DETECT_BRANCH_NAME)
      store.dispatch(types.GITHUB_GET_PULL)
    }
  }

  export default {
    components: {
      settingsPage
    },
    methods: {
      toggleSideNav () {
        this.$refs.leftSidenav.toggle()
      },
      open () {},
      close () {}
    },
    store
  }
</script>
<style scoped>
  .app{
    height: 100%;
    width: 100%;
  }
</style>

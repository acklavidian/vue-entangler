import * as types from '../mutation-types'

const settings = require('electron-settings')

const state = {
  username: '',
  password: '',
  owner: '',
  repo: '',
  directory: ''
}

const mutations = {
  [types.GITHUB_SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.GITHUB_SET_PASSWORD] (state, password) {
    state.password = password
  },
  [types.GITHUB_SET_OWNER] (state, owner) {
    state.owner = owner
  },
  [types.GITHUB_SET_REPO] (state, repo) {
    state.repo = repo
  },
  [types.USER_SETTINGS_DIRECTORY] (state, directory) {
    state.directory = directory
  }
}

const actions = {
  [types.USER_SETTINGS_SAVE] ({ state }) {
    settings.setAll({
      userSettings: {
        username: state.username,
        password: state.password,
        owner: state.owner,
        repo: state.repo
      }
    })
  },
  [types.USER_SETTINGS_LOAD] ({ state, commit, rootState }) {
    let storedSettings = settings.get('userSettings') || {}

    commit(types.GITHUB_SET_USERNAME, storedSettings.username || '')
    commit(types.GITHUB_SET_PASSWORD, storedSettings.password)
    commit(types.GITHUB_SET_OWNER, storedSettings.owner)
    commit(types.GITHUB_SET_REPO, storedSettings.repo)
  }
}

export default {
  state,
  mutations,
  actions
}

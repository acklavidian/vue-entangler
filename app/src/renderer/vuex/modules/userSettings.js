import * as types from '../mutation-types'

const state = {
  username: '',
  password: '',
  owner: '',
  repo: ''
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
  }
}

export default {
  state,
  mutations
}

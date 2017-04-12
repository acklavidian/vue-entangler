import * as types from '../mutation-types'

const state = {
  issue: ''
}

const mutations = {
  [types.GITHUB_GET_ISSUE] (state, username) {
    state.issue = username
  }
}

const actions = {
  getIssue ({state, commit, rootState}) {
    var Octokat = require('octokat')
    var octo = new Octokat({
      username: rootState.userSettings.username,
      password: rootState.userSettings.password
    })
    var repo = octo.repos(rootState.userSettings.owner, rootState.userSettings.repo)

    repo.issues.fetch().then((a) => {
      console.log(a.items[0])
      commit(types.GITHUB_GET_ISSUE, a.items[0])
    })
  }
}

export default {
  state,
  mutations,
  actions
}

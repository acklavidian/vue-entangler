import * as types from '../mutation-types'

const state = {
  issue: '',
  pull: ''
}

const mutations = {
  [types.GITHUB_SET_ISSUE] (state, issue) {
    state.issue = issue
  },
  [types.GITHUB_SET_PULL] (state, pull) {
    state.pull = pull
  }
}

const actions = {
  [types.GITHUB_GET_ISSUE] ({state, commit, rootState}) {
    var Octokat = require('octokat')
    var octo = new Octokat({
      username: rootState.userSettings.username,
      password: rootState.userSettings.password
    })
    var repo = octo.repos(rootState.userSettings.owner, rootState.userSettings.repo)

    repo.issues.fetch().then((a) => {
      console.log(a.items[0])
      commit(types.GITHUB_SET_ISSUE, a.items[0])
    })
  },
  [types.GITHUB_GET_PULL] ({state, commit, rootState}) {
    var Octokat = require('octokat')
    var octo = new Octokat({
      username: rootState.userSettings.username,
      password: rootState.userSettings.password
    })
    var repo = octo.repos(rootState.userSettings.owner, rootState.userSettings.repo)
    var localBranchName = rootState.localGitData.branch.name
    var options = {
      head: 'acklavidian' + ':' + localBranchName,
      state: 'all'
    }

    repo.pulls.fetch(options).then((a) => {
      var pull = a.items[0]
      console.log('pull: ', pull)
      commit(types.GITHUB_SET_PULL, pull)
    })
  }
}

export default {
  state,
  mutations,
  actions
}

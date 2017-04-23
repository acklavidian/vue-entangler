import * as types from '../mutation-types'

const state = {
  branch: {
    name: {}
  }
}

const mutations = {
  [types.GIT_SET_BRANCH_NAME] (state, branchName) {
    state.branch.name = branchName
  }
}

const actions = {
  [types.GIT_DETECT_BRANCH_NAME] ({state, commit, rootState}) {
    var gitRepo = require('git-repo-info')
    let branchName = gitRepo.branch
    console.log('daRepo: ', gitRepo().branch)
    commit(types.GIT_DETECT_BRANCH_NAME, branchName)
  }
}

export default {
  state,
  mutations,
  actions
}

const mutations = {
  setCurrentUser(state, val) {
    state.currentUser = val
  },
  setUserProfile(state, val) {
    state.userProfile = val
  },
  setColors(state, val) {
    state.colors = val ? val : []
  },
  setClasses(state, val) {
    state.classes = val ? val : []
  },
  setAttributes(state, val) {
    state.attributes = val ? val : []
  },
  setCollection(state, val) {
    state.attributes = val
  }
}

export default mutations

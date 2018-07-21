const mutations = {
  setCurrentUser(state, val) {
    state.currentUser = val
  },
  setUserProfile(state, val) {
    state.userProfile = val
  },
  setCollection(state, collection) {
    state[collection.id] = collection.items
  }
}

export default mutations

import router from '../router'
import store from './index'
const fb = require('./firebaseConfig')

// handle page reload
fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')
  }
})

const actions = {
  clearData({ commit }) {
    commit('setCurrentUser', null)
    commit('setUserProfile', {})
  },
  fetchUserProfile({ commit, state }) {
    fb.usersCollection
      .doc(store.state.currentUser.uid)
      .get()
      .then(res => {
        commit('setUserProfile', res.data())
      })
      .catch(err => {
        console.log(err)
      })
  },
  signOut() {
    fb.auth
      .signOut()
      .then(() => {
        store.dispatch('clearData')
        router.push('/signin')
      })
      .catch(err => {
        console.log(err)
      })
  },
  removeFromCollection({ dispatch }, data) {
    data.collection
      .doc(data.id)
      .delete()
      .then(ref => {
        // TODO Update store when items add & remove
        // store.dispatch('refreshCollection', { collection: data.collection }, 'name')
      })
      .catch(err => {
        console.log(err)
      })
  },
  addToCollection({ dispatch }, data) {
    const collection = data.collection
    const { key, name, color } = data.item
    collection
      .add(data.item)
      .then(ref => {
        // TODO Update store when items add & remove
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default actions

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
  removeFromCollection({ dispatch }, collection) {
    collection.reference
      .doc(collection.item.key.toString()) // doc id must be a string, but item key should be number
      .delete()
      .then(ref => {
        store.dispatch('setCollection', collection.reference)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addToCollection({ dispatch }, collection) {
    collection.reference
      .doc(collection.item.key.toString()) // doc id must be a string, but item key should be number
      .set(collection.item)
      .then(ref => {
        store.dispatch('setCollection', collection.reference)
      })
      .catch(err => {
        console.log(err)
      })
  },
  setCollection({ dispatch }, collection) {
    collection
      .orderBy('key')
      .get()
      .then(querySnapshot => {
        if (querySnapshot.empty) {
          return
        } else {
          const updatedCollection = {
            id: collection.id,
            items: []
          }
          querySnapshot.forEach(doc => {
            updatedCollection.items.push(doc.data())
          })
          store.commit('setCollection', updatedCollection)
        }
      })
  }
}

export default actions

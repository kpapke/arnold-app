import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const initializeStateWithCollections = () => {
  const fb = require('./firebaseConfig')
  for (var collection in fb.collections) {
    if (fb.collections.hasOwnProperty(collection)) {
      const collectionId = fb.collections[collection].id
      fb.collections[collection]
        .orderBy('key')
        .get()
        .then(querySnapshot => {
          if (querySnapshot.empty) {
            return
          } else {
            const updatedCollection = {
              id: collectionId,
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
}
initializeStateWithCollections()

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store

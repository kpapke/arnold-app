import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const initializeStateWithCollections = () => {
  const fb = require('./firebaseConfig')
  const collections = [fb.colorsCollection, fb.classesCollection, fb.attributesCollection]
  collections.forEach(collection => {
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
  })
}
initializeStateWithCollections()

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store

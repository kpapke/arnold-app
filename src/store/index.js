import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

const fb = require('./firebaseConfig')

const collections = [
  { commitName: 'setColors', data: fb.colorsCollection },
  { commitName: 'setClasses', data: fb.classesCollection },
  { commitName: 'setAttributes', data: fb.attributesCollection }
]
collections.forEach(collection => {
  collection.data.get().then(querySnapshot => {
    if (querySnapshot.empty) {
      return
    } else {
      const items = []
      querySnapshot.forEach(doc => {
        items.push({ id: doc.id, data: doc.data() })
      })
      store.commit(collection.commitName, items)
    }
  })
})

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store

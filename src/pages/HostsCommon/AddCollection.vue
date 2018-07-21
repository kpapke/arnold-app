<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <form 
            @submit="submitForm(key, name, classKey)" 
            @submit.prevent>
            <md-field class="md-layout-item md-size-100">
              <label>Key</label>
              <md-input 
                v-model="key"
                type="number" 
                placeholder="Key (num)"/>
            </md-field>
            <md-field class="md-layout-item md-size-100">
              <label>Name</label>
              <md-input 
                v-model="name" 
                placeholder="Name (str)"/>
            </md-field>
            <md-field class="md-layout-item md-size-100">
              <label>Class</label>
              <md-input 
                v-model="classKey" 
                type="number"
                placeholder="Class Key (num)"/>
            </md-field>
            <div class="md-layout-item md-size-100">
              <md-button 
                class="md-raised md-success" 
                type="submit">Add Item
              </md-button>
            </div>
          </form>
        </md-card>
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Roles Table</h4>
            <p class="category">{{ countCollection('roles') }} Items</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="roles">
              <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }">
                <md-table-cell md-label="key">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="class" >
                  <div :class="['base-color color-' + item.class ]"/>
                  <span v-if="classes[item.class]">{{ classes[item.class].name }}</span>
                </md-table-cell>
                <md-table-cell md-label="delete"><button @click="removeRow(item.key)">delete</button></md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from 'vuex'
const fb = require('../../store/firebaseConfig')

export default {
  data() {
    return {
      name: '',
      key: '',
      classKey: ''
    }
  },
  computed: {
    ...mapState(['roles', 'classes']),
    ...mapGetters(['countCollection'])
  },
  methods: {
    ...mapActions(['addToCollection', 'removeFromCollection']),
    submitForm(key, name, classKey) {
      this.addToCollection({
        reference: fb.collections['roles'],
        item: {
          name,
          key: parseInt(key),
          class: parseInt(classKey)
        }
      })
      this.name = null
      this.key = null
      this.classKey = null
      this.showToast('success', `Item Added: [${name}]`)
    },
    removeRow(key) {
      this.removeFromCollection({
        reference: fb.collections['roles'],
        item: {
          key
        }
      })
      this.showToast('warning', 'Item Deleted')
    },
    showToast(type, message) {
      this.$notify({
        message: message,
        icon: 'add_alert',
        horizontalAlign: 'center',
        verticalAlign: 'top',
        type: type
      })
    }
  }
}
</script>

<style scoped>
</style>

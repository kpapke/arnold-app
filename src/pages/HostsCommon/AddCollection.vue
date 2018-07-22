<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <form 
            @submit="submitForm(field1, field2)" 
            @submit.prevent>
            <md-field class="md-layout-item md-size-100">
              <label>Key</label>
              <md-input 
                v-model="field1"
                type="number"
                placeholder="key (str)"/>
            </md-field>
            <md-field class="md-layout-item md-size-100">
              <label>Roles</label>
              <md-input 
                v-model="field2" 
                placeholder="roles (array)"/>
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
            <h4 class="title">Hosts Table</h4>
            <p class="category">{{ countCollection('hosts') }} Items</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="hosts">
              <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }">
                <md-table-cell md-label="key">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="stars">{{ item.stars }}</md-table-cell>
                <md-table-cell md-label="roles">
                  <img
                    v-for="(roleKey, index) in item.roles" 
                    v-if="roles[roleKey]"
                    :key="index"
                    :src="require('@/assets/img/roles/byKey/'+ roleKey + '.icon.png')" 
                    :alt="roles[roleKey].name"
                    class="role-icon-sm"
                  >
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
const collectionName = 'hosts'

export default {
  data() {
    return {
      field1: '',
      field2: ''
    }
  },
  computed: {
    ...mapState([collectionName, 'roles']),
    ...mapGetters(['countCollection'])
  },
  methods: {
    ...mapActions(['addToCollection', 'removeFromCollection']),
    submitForm(field1, field2) {
      this.addToCollection({
        reference: fb.collections[collectionName],
        item: {
          key: parseInt(field1),
          roles: field2
            .replace('[', '')
            .replace(']', '')
            .split(',')
            .map(Number)
        }
      })
      this.field1 = null
      this.field2 = null
      this.showToast('success', `Item Added: [${field1}]`)
    },
    removeRow(key) {
      this.removeFromCollection({
        reference: fb.collections[collectionName],
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

<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <!-- <form @submit="addItem(key, name, color) ">
            <md-field class="md-layout-item md-size-100">
              <label>Key</label>
              <md-input 
                v-model="key" 
                type="number" 
                placeholder="Key"/>
            </md-field>
            <md-field class="md-layout-item md-size-100">
              <label>Name</label>
              <md-input 
                v-model="name" 
                placeholder="Name"/>
            </md-field>
            <md-field class="md-layout-item md-size-100">
              <label>Color</label>
              <md-input 
                v-model="color"
                type="number"
                placeholder="Color"/>
            </md-field>
            <div class="md-layout-item md-size-100">
              <md-button 
                class="md-raised md-success" 
                type="submit">Add Item</md-button>
            </div>
          </form> -->
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Classes Header</h4>
            <p class="category">Classes Subtitle</p>
          </md-card-header>
          <md-card-content>
            <md-table 
              v-model="classes" 
              data-background-color="green">
              <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }">
                <md-table-cell md-label="key">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="color" >
                  <div :class="['base-color base-' + item.key ]"/>
                  <span>{{ colors[item.key-1] ? colors[item.key-1].name : '' }}</span>
                </md-table-cell>
                <md-table-cell md-label="delete"><button @click="deleteItem(item.id)">delete</button></md-table-cell>

              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleTable, OrderedTable } from '@/components'
import { firestore, db } from '../main'

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  data() {
    return {
      colors: [],
      classes: {},
      name: '',
      key: '',
      color: ''
    }
  },
  firestore() {
    return {
      classes: db.getClasses(),
      colors: db.getColors()
    }
  },
  methods: {
    addItem(key, name, color) {
      const newItem = {
        key: parseInt(key),
        name: name,
        color: parseInt(color)
      }
      const createdAt = new Date()
      firestore
        .collection('classes')
        .doc()
        .set(newItem)
    },
    deleteItem(id) {
      firestore
        .collection('classes')
        .doc(id)
        .delete()
    }
  }
}
</script>

<style scoped>
.base-color {
  width: 25px;
  height: 25px;
  margin-right: 25px;
  display: inline-block;
  vertical-align: middle;
}

.base-1 {
  background: #ffa338;
}
.base-2 {
  background: #4079ff;
  color: white;
}
.base-3 {
  background: #98f55d;
}
.base-4 {
  background: #ed376e;
  color: white;
}
.base-5 {
  background: #bae9eb;
}
.base-6 {
  color: white;
  background: #a550cc;
}
</style>

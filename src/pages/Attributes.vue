<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Attributes Header</h4>
            <p class="category">Attributes Subtitle</p>
          </md-card-header>
          <md-card-content>
            <md-table 
              v-model="attributes" 
              data-background-color="green">
              <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }">
                <md-table-cell md-label="key">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="color" >
                  <div :class="['base-color base-' + item.color ]"/>
                  <span>{{ classes[item.color-1] ? classes[item.color-1].name : '' }}</span>
                </md-table-cell>
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
import { firestore } from '../main'

export default {
  components: {
    OrderedTable,
    SimpleTable
  },
  data() {
    return {
      classes: [],
      attributes: [],
      name: '',
      key: '',
      color: ''
    }
  },
  firestore() {
    return {
      attributes: firestore.collection('attributes').orderBy('key'),
      classes: firestore.collection('classes').orderBy('key')
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

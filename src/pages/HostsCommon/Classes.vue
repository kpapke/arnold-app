<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Classes Table</h4>
            <p class="category">{{ countCollection('classes') }} Items</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="classes">
              <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }">
                <md-table-cell md-label="key">{{ item.data.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.data.name }}</md-table-cell>
                <md-table-cell md-label="color" >
                  <div :class="['base-color base-' + item.data.key ]"/>
                  <span>{{ colors[item.data.key-1] ? colors[item.data.key-1].name : '' }}</span>
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
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['colors', 'classes']),
    ...mapGetters(['countCollection'])
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

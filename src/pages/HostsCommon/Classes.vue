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
                <md-table-cell md-label="key">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="color">
                  <div :class="['base-color color-' + item.key ]"/>
                  <span v-if="colors[item.key]">{{ colors[item.key].name }}</span>
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
</style>

<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Reveries Table</h4>
            <p class="category">{{ countCollection('reveries') }} Items</p>
          </md-card-header>
          <md-card-content>
            <md-table v-model="reveries">
              <md-table-row 
                slot="md-table-row" 
                slot-scope="{ item }">
                <md-table-cell md-label="key">{{ item.key }}</md-table-cell>
                <md-table-cell md-label="name">{{ item.name }}</md-table-cell>
                <md-table-cell md-label="attributes">{{ item.attributes }}</md-table-cell>
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
    ...mapState(['reveries']),
    ...mapGetters(['countCollection'])
  }
}
</script>

<style scoped>
</style>

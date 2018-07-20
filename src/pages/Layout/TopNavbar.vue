<template>
  <md-toolbar
    md-elevation="0" 
    class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button 
          :class="{toggled: $sidebar.showSidebar}" 
          class="md-just-icon md-simple md-toolbar-toggle" 
          @click="toggleSidebar">
          <span class="icon-bar"/>
          <span class="icon-bar"/>
          <span class="icon-bar"/>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete 
              v-model="selectedHosts" 
              :md-options="hosts" 
              class="search">
              <label>Search Hosts</label>
            </md-autocomplete>
          </div>
          <md-list>
            <md-list-item to="/colors">
              <i class="material-icons">dashboard</i>
              <p class="hidden-lg hidden-md">Colors</p>
            </md-list-item>

            <md-list-item 
              to="#" 
              class="dropdown">
              <drop-down>
                <a 
                  slot="title" 
                  class="dropdown-toggle" 
                  data-toggle="dropdown">
                  <i class="material-icons">notifications</i>
                  <span class="notification">1</span>
                  <p class="hidden-lg hidden-md">Notifications</p>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><a href="#">One notice</a></li>
                </ul>
              </drop-down>
            </md-list-item>

            <md-list-item
              to="#" 
              class="dropdown">
              <drop-down>
                <a 
                  slot="title" 
                  class="dropdown-toggle" 
                  data-toggle="dropdown">
                  <i class="material-icons">person</i>
                </a>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li><router-link to="profile">{{ currentUser.email }}</router-link></li>
                  <li><a 
                    href="#" 
                    @click="signOut">Sign Out</a></li>
                </ul>
              </drop-down>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>

  </md-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      selectedHosts: null,
      hosts: ['Teddy']
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    signOut() {
      this.$store.dispatch('signOut')
    }
  }
}
</script>

<style lang="css">
</style>

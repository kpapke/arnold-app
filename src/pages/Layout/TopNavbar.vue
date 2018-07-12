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

            <md-list-item to="#">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>

  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedHosts: null,
      hosts: ['Teddy']
    }
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    }
  }
}
</script>

<style lang="css">
</style>

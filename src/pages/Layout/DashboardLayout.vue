<template>
  <div class="wrapper">
    <notifications/>

    <side-bar>
      <mobile-menu slot="content"/>
      <!-- <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link> -->

      <sidebar-link to="/add-host">
        <md-icon>person_add</md-icon>
        <p>Add Host</p>
      </sidebar-link>
      <sidebar-link to="/hosts">
        <md-icon>group</md-icon>
        <p>Hosts</p>
      </sidebar-link>
      <sidebar-link to="/classes">
        <md-icon>people_outline</md-icon>
        <p>Classes</p>
      </sidebar-link>
      <sidebar-link to="/roles">
        <md-icon>business_center</md-icon>
        <p>Roles</p>
      </sidebar-link>
      <sidebar-link to="/attributes">
        <md-icon>pie_chart</md-icon>
        <p>Attributes</p>
      </sidebar-link>
      <sidebar-link to="/max-potential">
        <md-icon>bar_chart</md-icon>
        <p>Max Potential</p>
      </sidebar-link> 
      <sidebar-link to="/props">
        <md-icon>fitness_center</md-icon>
        <p>Props</p>
      </sidebar-link>
      <sidebar-link to="/reveries">
        <md-icon>cloud_upload</md-icon>
        <p>Reveries</p>
      </sidebar-link>
      <sidebar-link to="/buildings">
        <md-icon>store_mall_directory</md-icon>
        <p>Buildings</p>
      </sidebar-link>
      <sidebar-link to="/locations">
        <md-icon>map</md-icon>
        <p>Locations</p>
      </sidebar-link>
      <sidebar-link to="/colors">
        <md-icon>color_lens</md-icon>
        <p>Colors</p>
      </sidebar-link>

      <!-- <sidebar-link to="/user">
        <md-icon>person</md-icon>
        <p>User Profile</p>
      </sidebar-link>
        <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
       <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
       <sidebar-link to="/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
       <sidebar-link to="/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link> !-->
    </side-bar>

    <div class="main-panel">
      <top-navbar/>

      <dashboard-content/>

      <content-footer v-if="!$route.meta.hideFooter"/>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu
  }
}
</script>

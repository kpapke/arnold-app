// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Chartist from 'chartist'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import App from './App'
import Notifications from './components/NotificationPlugin'
// Plugins
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
// MaterialDashboard plugin
import MaterialDashboard from './material-dashboard'
// router setup
import routes from './routes/routes'

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
})

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

// setup firebase
firebase.initializeApp({
  projectId: 'vuefire-f2ffb',
  databaseURL: 'https://vuefire-f2ffb.firebaseio.com'
})
export const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Chartist from 'chartist'
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
import router from './router'
// Vuex store
import { store } from './store'
const firebaseConfig = require('./firebaseConfig')

Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(MaterialDashboard)
Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(Notifications)

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get() {
    return this.$root.Chartist
  }
})

/* eslint-disable no-new */
let app
firebaseConfig.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      data: {
        Chartist: Chartist
      },
      render: h => h(App),
      router,
      store
    })
  }
})

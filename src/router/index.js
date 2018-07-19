import Attributes from '@/pages/Attributes'
import Classes from '@/pages/Classes'
import Colors from '@/pages/Colors'
import Dashboard from '@/pages/Dashboard'
import DashboardLayout from '@/pages/Layout/DashboardLayout'
import Roles from '@/pages/Roles'
import firebase from 'firebase'
import VueRouter from 'vue-router'

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'nav-item active',
  routes: [
    // Toggled Off: [Dashboard, UserProfile, TableList, Typography, Icons, Maps, Notifications]
    // Meta: { hideFooter: true, requiresAuth: false }
    {
      path: '*',
      component: DashboardLayout,
      redirect: '/dashboard',
      children: [
        {
          path: 'attributes',
          name: 'Attributes',
          component: Attributes,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'classes',
          name: 'Classes',
          component: Classes,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'colors',
          name: 'Colors',
          component: Colors,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'roles',
          name: 'Roles',
          component: Roles,
          meta: {
            requiresAuth: true
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router

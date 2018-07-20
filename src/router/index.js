import Attributes from '@/pages/HostsCommon/Attributes'
import Classes from '@/pages/HostsCommon/Classes'
import Colors from '@/pages/HostsCommon/Colors'
import Roles from '@/pages/HostsCommon/Roles'
import DashboardLayout from '@/pages/Layout/DashboardLayout'
import Dashboard from '@/pages/Originals/Dashboard'
import SignIn from '@/pages/SignIn/SignIn'
import UserProfile from '@/pages/UserProfile/UserProfile'
import VueRouter from 'vue-router'
const fb = require('../store/firebaseConfig')

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
          component: Dashboard,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'signin',
          name: 'Sign In',
          component: SignIn,
          meta: {
            hideFooter: true
          }
        },
        {
          path: 'roles',
          name: 'Roles',
          component: Roles,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'profile',
          name: 'User Profile',
          component: UserProfile,
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
  const currentUser = fb.auth.currentUser

  if (requiresAuth && !currentUser) {
    next('/signin')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

export default router

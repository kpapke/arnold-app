import AddCollection from '@/pages/HostsCommon/AddCollection'
import Attributes from '@/pages/HostsCommon/Attributes'
import Buildings from '@/pages/HostsCommon/Buildings'
import Classes from '@/pages/HostsCommon/Classes'
import Colors from '@/pages/HostsCommon/Colors'
import Events from '@/pages/HostsCommon/Events'
import Hosts from '@/pages/HostsCommon/Hosts'
import Locations from '@/pages/HostsCommon/Locations'
import MaxPotentials from '@/pages/HostsCommon/MaxPotentials'
import Props from '@/pages/HostsCommon/Props'
import Reveries from '@/pages/HostsCommon/Reveries'
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
          path: 'add-collection',
          name: 'Add Collection',
          component: AddCollection,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'attributes',
          name: 'Attributes',
          component: Attributes,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'buildings',
          name: 'Buildings',
          component: Buildings,
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
          path: 'events',
          name: 'Events',
          component: Events,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'hosts',
          name: 'Hosts',
          component: Hosts,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'locations',
          name: 'Locations',
          component: Locations,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'max-potentials',
          name: 'MaxPotentials',
          component: MaxPotentials,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'props',
          name: 'Props',
          component: Props,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: 'reveries',
          name: 'Reveries',
          component: Reveries,
          meta: {
            requiresAuth: true
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
          path: 'signin',
          name: 'Sign In',
          component: SignIn,
          meta: {
            hideFooter: true
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

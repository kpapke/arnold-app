import Attributes from '@/pages/Attributes.vue'
import Classes from '@/pages/Classes.vue'
import Colors from '@/pages/Colors.vue'
import Dashboard from '@/pages/Dashboard.vue'
import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import Notifications from '@/pages/Notifications.vue'
import Roles from '@/pages/Roles.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/colors',
    children: [
      {
        path: 'attributes',
        name: 'Attributes',
        component: Attributes
      },
      {
        path: 'classes',
        name: 'Classes',
        component: Classes
      },
      {
        path: 'colors',
        name: 'Colors',
        component: Colors
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'roles',
        name: 'Roles',
        component: Roles
      },

      //   {
      //     path: 'dashboard',
      //     name: 'Dashboard',
      //     component: Dashboard
      //   },
      //   {
      //     path: 'user',
      //     name: 'User Profile',
      //     component: UserProfile
      //   }
      //     {
      //       path: 'table',
      //       name: 'Table List',
      //       component: TableList
      //     },
      //   {
      //     path: 'typography',
      //     name: 'Typography',
      //     component: Typography
      //   },
      //   {
      //     path: 'icons',
      //     name: 'Icons',
      //     component: Icons
      //   },
      //     {
      //       path: 'maps',
      //       name: 'Maps',
      //       meta: {
      //         hideFooter: true
      //       },
      //       component: Maps

      //     },,
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  }
]

export default routes

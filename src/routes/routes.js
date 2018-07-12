import Colors from "@/pages/Colors.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Notifications from "@/pages/Notifications.vue";
import Typography from "@/pages/Typography.vue";
import UserProfile from "@/pages/UserProfile.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "colors",
        name: "Colors",
        component: Colors
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      //   {
      //     path: 'table',
      //     name: 'Table List',
      //     component: TableList
      //   },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      //   {
      //     path: 'maps',
      //     name: 'Maps',
      //     meta: {
      //       hideFooter: true
      //     },
      //     component: Maps

      //   },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      }
    ]
  }
];

export default routes;

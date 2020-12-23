import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/flow',
        name: 'Flow',
        component: () => import('../views/flow/index.vue')
      },
      {
        path: '/check',
        name: 'Check',
        component: () => import('../views/check/index.vue')
      },
      {
        path: '/app',
        name: 'App',
        component: () => import('../views/app/index.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/user/index.vue')
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/CheckItem',
    name: 'CheckItem',
    component: () => import('../views/check/components/subpage/checkItem.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/CustomerInfoItem',
    name: 'CustomerInfoItem',
    component: () => import('../views/customerInfo/customerInfoItem.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('../views/customerInfo/customerDetail.vue')
  },
  {
    path: '/AssessDetails',
    name: 'AssessDetails',
    component: () => import('../views/check/components/subpage/assessDetails.vue')
  }, {
    path: '/Repair',
    name: 'Repair',
    component: () => import('../views/home/navViews/repair')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/user/cpmponents/about.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/home/components/news.vue')
  },
  // 待整改操作页面
  {
    path: '/Repairing',
    name: 'Repairing',
    component: () => import('../views/home/navViews/repairTab1Son.vue')
  },
  {
    path: '/Attendance',
    name: 'Attendance',
    component: () => import('../views/app/subpage/attendance.vue'),
    children: [
      {
        path: '/Attendance/AttendanceItem',
        name: 'AttendanceItem',
        component: () => import('../views/app/subpage/attendanceItem.vue')
      },
      {
        path: '/Attendance/Statistics',
        name: 'Statistics',
        component: () => import('../views/app/subpage/statistics.vue')
      }
    ]
  },
  // 首页视频更多
  {
    path: '/videoMore',
    name: 'VideoMore',
    component: () => import('../components/home/videoMore/index.vue')
    // component: () => import('../views/home/components/news.vue')
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: () => import('../views/app/subpage/personal.vue')
  },
  // 安防
  {
    path: '/security',
    name: 'Security',
    component: () => import('../views/home/security/index.vue')
  },
  {
    path: '/alarmDetail',
    name: 'AlarmDetail',
    component: () => import('../views/home/security/components/newAlarm/alarmDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

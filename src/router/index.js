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
  // 营业状态
  {
    path: '/busyStatus',
    name: 'BusyStatus',
    component: () => import('../views/user/cpmponents/busyStatus.vue')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import('../views/home/components/news.vue')
  },
  // 待整改页-tab1子页整改详情
  {
    path: '/Repairing',
    name: 'Repairing',
    component: () => import('../views/home/navViews/Tab1ChangeDetail.vue')
  },
  // 待整改页-tab2子页审核详情
  {
    path: '/checkDetail',
    name: 'checkDetail',
    component: () => import('../views/home/navViews/Tab2CheckDetail.vue')
  },
  // 待整改页-查看详情页
  {
    path: '/lookDetails',
    name: 'lookDetails',
    component: () => import('../views/home/navViews/lookDetails.vue')
  },
  // 待整改页-点检过程页
  {
    path: '/checkProcess',
    name: 'checkProcess',
    component: () => import('../views/home/navViews/checkProcess.vue')
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
  // 首页视频详情
  {
    path: '/VideoDetails',
    name: 'VideoDetails',
    component: () => import('../components/home/videoMore/videoDetails/index.vue')
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
  // 巡查统计
  {
    path: '/checkCount',
    name: 'CheckCount',
    component: () => import('../views/home/checkCount/index.vue')
  },

  {
    path: '/CheckItem',
    name: 'CheckItem',
    component: () => import('../views/check/components/subpage/checkItem.vue')
  },
  {
    path: '/AssessDetails',
    name: 'AssessDetails',
    component: () => import('../views/check/components/subpage/assessDetails.vue')
  }, {
    path: '/alarmDetail',
    name: 'AlarmDetail',
    component: () => import('../views/home/security/components/newAlarm/alarmDetail.vue')
  },
  {
    path: '/EvaluationDetails',
    name: 'EvaluationDetails',
    component: () => import('../views/check/components/subpage/evaluationDetails.vue')
  },
  {
    path: '/MissionDetails',
    name: 'MissionDetails',
    component: () => import('../views/check/components/subpage/missionDetails.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

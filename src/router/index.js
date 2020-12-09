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
    component: () => import('../components/check/checkItem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

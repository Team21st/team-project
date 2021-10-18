import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Market/Market.vue'),
    meta: {title: 'Market'},
    children: [
      {
        path: 'home',
        component: () => import('@/views/Market/Home'),
        meta: {title: 'Market'}
      },
      {
        path: 'commodity',
        component: () => import('@/views/Market/Commodity'),
        meta: {title: 'Market'}
      },
      {
        path: 'search',
        component: () => import('@/views/Market/Search'),
        meta: {title: 'Market'}
      },
      {
        path: 'user',
        component: () => import('@/views/Market/User'),
        meta: {title: 'Market'}
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/components/Home.vue'),
    meta: {title: 'Admin'},
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Admin/Dashboard'),
        meta: {title: 'Dashboard'}
      },
      {
        path: 'accounts',
        component: () => import('@/views/Admin/Account'),
        meta: {title: 'Accounts'}
      },
      {
        path: 'comment',
        component: () => import('@/views/Admin/Comment'),
        meta: {title: 'Comment'}
      },
      {
        path: 'commodity',
        component: () => import('@/views/Admin/Commodity'),
        meta: {title: 'Commodity'}
      },
      {
        path: 'money',
        component: () => import('@/views/Admin/MoneyAdmin'),
        meta: {title: 'MoneyAdmin'}
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   // 路由守卫
// })

export default router

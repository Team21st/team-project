import Vue from 'vue'
import VueRouter from 'vue-router'
import storage from 'store'
import {Message} from 'element-ui'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Market/Market.vue'),
    meta: {title: 'Market'},
    children: [
      {
        path: '/',
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
      {
        path: 'book',
        component: () => import('@/views/Market/BookInfo'),
        meta: {title: 'Book Info'}
      },
      {
        path: 'cart',
        component: () => import('@/views/Market/Cart'),
        meta: {title: 'Shopping Cart'}
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

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

// router.beforeEach((to, from, next) => {
//   let token = storage.get('token')
//   if (to.path === '/user' && token == null) {
//     Message.error('You need to Login !')
//     next({
//       path: '/login'
//     })
//   } else {
//     next()
//   }
//   // 路由守卫
// })

export default router

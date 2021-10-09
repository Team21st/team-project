import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../components/Home.vue'),
    meta: {title: 'Admin'},
    children: [
      {
        path: 'accounts',
        component: () => import('../views/Admin/Account'),
        meta: {title: '账号管理'}
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'

import config from '@/config'

Vue.prototype.$config = config

import './assets/CSS/index.less'
import './assets/CSS/theme/index.css'

Vue.use(ElementUI)
Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

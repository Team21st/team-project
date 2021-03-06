import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import 'element-ui/lib/theme-chalk/display.css';

import config from '@/config'

import VCharts from 'v-charts'

Vue.prototype.$config = config
Vue.prototype.$message = Message

import './assets/CSS/index.less'
import './assets/CSS/theme/index.css'

Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(animate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

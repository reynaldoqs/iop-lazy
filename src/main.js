import Vue from 'vue'
import store from './store'
import App from './App.vue'
import { router } from './plugins/router'

import '@/plugins/element.js'
import '@/plugins/particles.js'
import '@/plugins/axios.js'
import '@/plugins/hub.js'
import '@/plugins/utils.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

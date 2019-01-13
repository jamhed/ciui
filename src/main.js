// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/config'
import EventBusPlugin from '@/event-bus-plugin'
import WsProtoPlugin from '@/ws-proto-plugin'
import SessionPlugin from '@/session-plugin'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(EventBusPlugin)
Vue.use(WsProtoPlugin)
Vue.use(SessionPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

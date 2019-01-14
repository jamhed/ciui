// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/config'
import EventBusPlugin from '@/event-bus-plugin'
import SessionPlugin from '@/session-plugin'
import WsProtoPlugin from '@/ws-proto-plugin'

import Login from '@/src/Login'
import Admin from '@/src/Admin'
import Main from '@/src/Main'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(EventBusPlugin)
Vue.use(WsProtoPlugin)
Vue.use(SessionPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    app: undefined
  },
  components: {
    login: Login,
    admin: Admin,
    app: Main
  },
  methods: {
    chooseApp () {
      console.log('choose', this.$session.user())
      if (!this.$session.isAuth()) {
        this.app = 'login'
      } else {
        switch (this.$session.role()) {
          case 'admin':
            this.app = 'admin'
            break
          default:
            this.app = 'app'
        }
      }
    }
  },
  created () {
    this.$bus.$on('user-auth', (Auth) => this.chooseApp())
    this.$bus.$on('user-logout', () => this.chooseApp())
    this.chooseApp()
  }
})

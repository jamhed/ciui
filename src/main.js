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
import SessionPlugin from '@/session-plugin'
import WsProtoPlugin from '@/ws-proto-plugin'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(EventBusPlugin)
Vue.use(WsProtoPlugin)
Vue.use(SessionPlugin)

function guard (self, to, from, next) {
  if (to.path === '/login') {
    return next()
  }
  if (self.$session.isAuth()) {
    self.initial_path = to.path
    next()
  } else {
    next('/login')
  }
}

function handleAuth (R, Auth) {
  if (Auth) {
    if (R.initial_path === '/login') {
      R.$router.replace('/')
    } else {
      R.$router.replace(R.initial_path)
    }
  } else {
    R.$router.replace('/login')
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
    this.$router.beforeEach((to, from, next) => guard(this, to, from, next))
    if (!this.$session.isAuth()) {
      this.initial_path = this.$router.currentRoute.path
      this.$router.replace('/login')
    }
    this.$bus.$on('user-auth', (Auth) => handleAuth(this, Auth))
    this.$bus.$on('user-logout', () => this.$router.replace('/login'))
  }
})

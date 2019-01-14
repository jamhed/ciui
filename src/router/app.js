import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/src/Main'
import Login from '@/src/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Main },
    { path: '/login', component: Login }
  ]
})

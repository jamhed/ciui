<template>
<div style="min-height: 100%">
  <b-navbar class="navbar-custom fixed-top" toggleable="md" type="dark" variant="info">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand to="/">{{ userName() }}</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/profile">Profile</b-nav-item>
        <b-nav-item @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <span>{{ date | filterDate }}</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <div>
    <transition name="main" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

  <footer class="footer">
    <div class="container">
      <div class="row  justify-content-center">
        <small>
          ErlCI &copy; 2019 jamhed
        </small>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import Base from '@/src/Base'
import VueRouter from 'vue-router'
import Profile from '@/src/Main/Profile'
import Repos from '@/src/Main/Repos'

const router = new VueRouter({
  routes: [
    { path: '/profile', component: Profile },
    { path: '/repos', component: Repos },
    { path: '/', redirect: '/repos' }
  ]
})

export default {
  name: 'Main',
  mixins: [Base],
  router,
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

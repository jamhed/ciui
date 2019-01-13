<template>
<div style="min-height: 100%">
  <b-navbar class="navbar-custom fixed-top" toggleable="md" type="dark" variant="info">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand to="/">User</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
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
    <transition name="app" mode="out-in">
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
import moment from 'moment'

export default {
  name: 'Main',
  data () {
    return {
      date: null
    }
  },
  methods: {
    logout () {
      this.$api.pmfa('ws_user', 'logout', [])
    }
  },
  created () {
    this.date = new Date()
    setInterval(() => { this.date = new Date() }, 1000)
  },
  filters: {
    filterDate: function (date) {
      return moment(date).format('ddd[,] Do MMM YYYY[,] HH:mm:ss')
    }
  }
}
</script>

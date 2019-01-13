<template>
<div style="min-height: 100%; padding-bottom: 60px">
  <b-navbar class="navbar-custom fixed-top" toggleable="md" type="dark" variant="info">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>
    <b-navbar-brand to="/">User</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/help">Help</b-nav-item>
        <b-nav-item>Logout</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <span>Date</span>
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
      R.$router.replace('/main')
    } else {
      R.$router.replace(R.initial_path)
    }
  } else {
    R.$router.replace('/login')
  }
}

export default {
  name: 'App',
  created () {
    this.$router.beforeEach((to, from, next) => guard(this, to, from, next))
    if (!this.$session.isAuth()) {
      this.initial_path = this.$router.currentRoute.path
      this.$router.replace('/login')
    }
    this.$bus.$on('agent-auth', (Auth) => handleAuth(this, Auth))
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding-top: 60px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  background-color: #f5f5f5;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}
</style>

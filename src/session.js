import Vue from 'vue'

export default class Session {
  constructor () {
    this.vm = new Vue({
      data: {
        auth: false,
        user: {}
      }
    })
    this.vm.$bus.$on('user-auth', (data) => {
      this.vm.auth = true
      this.vm.user = data.user
    })
    this.vm.$bus.$on('user-logout', () => {
      this.vm.auth = false
      this.vm.user = {}
    })
  }

  isAuth () { return this.vm.auth }
  user () { return this.vm.user }
  role () { return this.vm.user.role }

  guessWs () {
    let proto = window.location.protocol === 'http:' ? 'ws://' : 'wss://'
    let port = window.location.port ? ':' + window.location.port : ''
    return proto + window.location.hostname + port + '/ws'
  }
}

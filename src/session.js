import Vue from 'vue'

export default class Session {
  constructor () {
    this.vm = new Vue({
      data: {
        auth: false
      }
    })
  }

  isAuth () { return this.vm.auth }

  guessWs () {
    let proto = window.location.protocol === 'http:' ? 'ws://' : 'wss://'
    let port = window.location.port ? ':' + window.location.port : ''
    return proto + window.location.hostname + port + '/ws'
  }
}

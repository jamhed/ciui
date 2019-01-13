import Session from '@/session.js'

export default {
  install: function (Vue) {
    if (!Vue.prototype.$session) {
      Vue.prototype.$session = new Session()
    }
  }
}

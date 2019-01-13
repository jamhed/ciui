import WsProto from '@/ws-proto.js'

export default {
  install: function (Vue) {
    if (!Vue.prototype.$api) {
      Vue.prototype.$api = new WsProto(window.config.ws)
    }
  }
}

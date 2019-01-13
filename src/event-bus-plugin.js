import {EventBus} from '@/event-bus.js'

export default {
  install: function (Vue) {
    if (!Vue.prototype.$bus) {
      Vue.prototype.$bus = EventBus
    }
  }
}

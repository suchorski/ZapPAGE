import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/plugins/router'
import store from '@/plugins/store'

import VueGtag from 'vue-gtag'

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: process.env.VUE_APP_ANALYTICS_TAG }
}, router)

Vue.use(require('vue-moment'));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

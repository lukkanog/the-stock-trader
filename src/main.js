import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import filters from "./filters"
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  filters,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = "/api/"

Vue.use(VueAxios, axios)
Vue.use(Buefy)

import 'buefy/dist/buefy.css';
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

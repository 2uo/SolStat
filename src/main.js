import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import axios from 'axios'
import VueAxios from 'vue-axios'
import {AUTH_LOGOUT} from '@/store/actions/auth'


axios.defaults.baseURL = "http://localhost:3000/api/"
axios.interceptors.response.use(null, function(error) {
  if (error.response.status === 401) {
    localStorage.removeItem('user-token')
    store.dispatch(AUTH_LOGOUT).then(() => {
      router.push('/login')
    })
  }
  return Promise.reject(error);
});

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

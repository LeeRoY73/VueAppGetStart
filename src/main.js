import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './plugins/route.js';
import store from './plugins/store.js';
import axios from 'axios';
import './plugins/axios.js'
import VueAxios from './plugins/axios'

Vue.use(VueAxios)
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

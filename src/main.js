// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import App from './App'

import router from './routes.js'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'



Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
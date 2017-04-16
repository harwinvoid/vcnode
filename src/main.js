// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import {sync} from 'vuex-router-sync'
import moment from 'moment'

import {InfiniteScroll} from 'mint-ui'

Vue.use(InfiniteScroll)

sync(store, router)
moment.locale('zh-CN')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

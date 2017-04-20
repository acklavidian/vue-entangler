import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import VueMaterial from 'vue-material'
import './assets/Roboto.css'
import './assets/material-icons.css'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)

Vue.config.debug = true

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})
router.push('home')
Vue.material.registerTheme('default', {
  primary: 'grey',
  accent: {
    color: 'green',
    hue: 'A700'
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')

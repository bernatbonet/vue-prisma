// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from '@/router'

Vue.use(VueMaterial)

/* Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'yellow',
  background: 'grey'
})

 Vue.material.registerTheme({
  app: {
    primary: 'red'
  },
  about: {
    primary: 'yellow'
  },
  contact: {
    primary: 'teal'
  }
})

Vue.material.setCurrentTheme('app') */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

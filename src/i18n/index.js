import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'es',
  messages: {
    'es': require('@/i18n/es.json'),
    'en': require('@/i18n/en.json')
  }
})

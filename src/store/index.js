import Vue from 'vue'
import Vuex from 'vuex'
import loginStore from '@/store/Login'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    saludo: 'Hola',
    nombre: 'Pepito'
  },
  getters: {
    getSaludo: state => {
      return state.saludo
    },
    getNombre: state => {
      return state.nombre
    }
  },
  mutations: {
    setSaludo: (state, saludo) => {
      state.saludo = saludo
    },
    setNombre: (state, nombre) => {
      state.nombre = nombre
    }
  },
  modules: {
    login: loginStore
  }
})

export default store

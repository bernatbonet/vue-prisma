import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const loginStore = new Vuex.Store({
  state: {
    username: '',
    token: '',
    permissions: []
  },
  /* getters: {
    getUsername: state => {
      return state.username
    },
    getToken: state => {
      return state.token
    },
    getPermissions: state => {
      return state.permissions
    }
  }, */
  mutations: {
    setUsername: (state, username) => {
      state.username = username
    },
    setToken: (state, token) => {
      state.token = token
    }
  }
})

export default loginStore

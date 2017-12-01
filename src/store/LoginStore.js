const user = {
  username: 'juanito',
  token: '',
  permissions: []
}

const getters = {
  getUser: (state) => {
    return user
  },
  getUsername: (state) => {
    return user.username
  },
  getToken: (state, getters) => {
    return getters.getUser.token
  },
  getPermissions: (state, getters) => {
    return getters.getUser.permissions
  }
}

const mutations = {
  setUsername: (state, username) => {
    user.username = username
  },
  setToken: (state, token) => {
    user.token = token
  }}

export default {
  namespaced: true,
  state: user,
  getters,
  mutations
}
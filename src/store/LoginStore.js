const user = {
  username: null,
  token: null,
  timeIn: null,
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
  getTime: (state, getters) => {
    return getters.getUser.timeIn
  },
  getPermissions: (state, getters) => {
    return getters.getUser.permissions
  },
  isAuthenticated: (state, getters) => {
    return (getters.getToken !== '')
  }
}

const mutations = {
  setUsername: (state, username) => {
    user.username = username
  },
  setToken: (state, token) => {
    user.token = token
  },
  setTimeIn: (state, time) => {
    user.timeIn = time
  }
}

const actions = {
  setUsername: (context, username) => {
    context.commit('setUsername', username)
  },
  setToken: (context, token) => {
    context.commit('setToken', token)
  },
  setTimeIn: (context, time) => {
    context.commit('setTimeIn', time)
  }
}

export default {
  namespaced: true,
  state: user,
  getters,
  mutations,
  actions
}

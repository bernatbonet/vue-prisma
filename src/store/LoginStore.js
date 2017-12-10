const user = {
  id: null,
  username: null,
  first_name: null,
  last_name: null,
  email: null,
  is_active: null,
  is_staff: null,
  is_superuser: null,
  token: null,
  timeIn: null,
  last_login: null,
  permissions: []
}

const getters = {
  getUser: (state) => {
    return user
  },
  getId: (state) => {
    return user.id
  },
  getUsername: (state) => {
    return user.username
  },
  getFirstName: (state) => {
    return user.first_name
  },
  getLastName: (state) => {
    return user.last_name
  },
  getEmail: (state) => {
    return user.email
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
    return (getters.getToken !== null)
  }
}

const mutations = {
  setId: (state, id) => {
    user.id = id
  },
  setUsername: (state, username) => {
    user.username = username
  },
  setFirstName: (state, firstName) => {
    user.first_name = firstName
  },
  setLastName: (state, lastName) => {
    user.last_name = lastName
  },
  setEmail: (state, email) => {
    user.email = email
  },
  setToken: (state, token) => {
    user.token = token
  },
  setTimeIn: (state, time) => {
    user.timeIn = time
  }
}

const actions = {
  setId: (context, id) => {
    context.commit('setId', id)
  },
  setUsername: (context, username) => {
    context.commit('setUsername', username)
  },
  setFirstName: (context, firstName) => {
    context.commit('setFirstName', firstName)
  },
  setLastName: (context, lastName) => {
    context.commit('setLastName', lastName)
  },
  setEmail: (context, email) => {
    context.commit('setEmail', email)
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

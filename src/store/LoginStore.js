const user = {
  id: null,
  username: null,
  password: null,
  first_name: null,
  last_name: null,
  email: null,
  is_superuser: null,
  is_active: null,
  is_staff: null,
  date_joined: null,
  last_login: null,
  token: null,
  timeIn: null,
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
  getPassword: (state) => {
    return user.password
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
  getIsSuperuser: (state) => {
    return user.is_superuser
  },
  getIsActive: (state) => {
    return user.is_active
  },
  getIsStaff: (state) => {
    return user.is_staff
  },
  getDateJoined: (state) => {
    return user.date_joined
  },
  getLastLogin: (state) => {
    return user.last_login
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
  setPassword: (state, password) => {
    user.password = password
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
  setIsSuperuser: (state, isSuperUser) => {
    user.is_superuser = isSuperUser
  },
  setIsActive: (state, isActive) => {
    user.is_active = isActive
  },
  setIsStaff: (state, isStaff) => {
    user.is_staff = isStaff
  },
  setDateJoined: (state, dateJoined) => {
    user.date_joined = dateJoined
  },
  setLastLogin: (state, lastLogin) => {
    user.last_login = lastLogin
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
  setPassword: (context, password) => {
    context.commit('setPassword', password)
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
  setIsSuperuser: (context, isSuperuser) => {
    context.commit('setIsSuperuser', isSuperuser)
  },
  setIsActive: (context, isActive) => {
    context.commit('setIsActive', isActive)
  },
  setIsStaff: (context, isStaff) => {
    context.commit('setIsStaff', isStaff)
  },
  setDateJoined: (context, dateJoined) => {
    context.commit('setDateJoined', dateJoined)
  },
  setLastLogin: (context, lastLogin) => {
    context.commit('setLastLogin', lastLogin)
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

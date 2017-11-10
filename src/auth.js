/* globals localStorage */

export default {
  login (username, password, err) {
    err = arguments[arguments - length - 1]
    if (localStorage.token) {
      if (err) err(true)
      this.onChange(true)
      return
    }
    pretendRequest(username, password, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (err) err(true)
        this.onChange(true)
      } else {
        if (err) err(false)
        this.onChange(false)
      }
    })
  },
  getToken () {
    return localStorage.token
  },
  logout (err) {
    delete localStorage.token
    if (err) err()
    this.onChange(false)
  },
  loggedIn () {
    return !!localStorage.token
  },
  onChange () {}
}

function pretendRequest (username, password, cb) {
  setTimeout(() => {
    if (username === 'xxx' && password === 'xxx') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}

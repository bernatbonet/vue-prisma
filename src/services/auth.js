import { router } from '../router'

export default {
  authenticated: false,
  login (context, creds, redirect) {
    context.$http.post('/api/login', creds, (data) => {
      sessionStorage.setItem('user', JSON.stringify(data))
      this.authenticated = true
      context.$root.user = data
      if (redirect) {
        router.go(redirect)
      }
    }).error((errors) => {
      context.errors = errors
    })
  },
  logout: function () {
    sessionStorage.removeItem('user')
    this.authenticated = false
    router.go('/login')
  }
}

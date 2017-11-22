import router from '@/router'

// URL and endpoint constants
const API_URL = 'https://bernatbonet.auth0.com/api/v2'
const LOGIN_URL = API_URL + '/'
const SIGNUP_URL = API_URL + '/users/'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },
  // Send a request to the login URL and save the returned JWT
  login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
      sessionStorage.setItem('id_token', data.id_token)
      sessionStorage.setItem('access_token', data.access_token)

      this.user.authenticated = true

      // Redirect to specific route
      if (redirect) {
        router.go(redirect)
      }
    }).error((errors) => {
      context.errors = errors
    })
  },
  // Signup
  signup (context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      sessionStorage.setItem('id_token', data.id_token)
      sessionStorage.setItem('access_token', data.access_token)

      this.user.authenticated = true

      // Redirect to specific route
      if (redirect) {
        router.go(redirect)
      }
    })
  },
  // To log out, we just need to remove the token
  logout: function () {
    sessionStorage.removeItem('id_token')
    sessionStorage.removeItem('access_token')
    this.authenticated = false
    router.go('/login')
  },
  // Check authentication
  checkAuth () {
    var jwt = sessionStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },
  // The object to be passed as a header for authenticated requests
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + sessionStorage.getItem('access_token')
    }
  }
}

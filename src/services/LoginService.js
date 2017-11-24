import axios from 'axios'
// import getHeader from '../auth.config'
// URL and endpoint constants
const API_URL = 'localhost:9988/'
const LOGIN_URL = API_URL + 'auth/api-token-auth/'

export const getHeader = function () {
  const tokenData = JSON.parse(window.sessionStorage.getItem('token'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer' + tokenData.access_token
  }
  return headers
}

export default {
  login (valor) {
    return new Promise(function (resolve, reject) {
      axios.post(LOGIN_URL, valor, getHeader)
        .then(function (res) {
          resolve(res)
        })
        .catch(function (err) {
          reject(err)
        })
    })
  }
}

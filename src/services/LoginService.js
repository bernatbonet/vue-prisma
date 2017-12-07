import axios from 'axios'
// import getHeader from '../auth.config'
// URL and endpoint constants
const API_URL = 'http://localhost:9988/'
const LOGIN_URL = API_URL + 'auth/api-token-auth/'

export const getHeader = function () {
  const tokenData = JSON.parse(window.sessionStorage.getItem('userToken'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Token ' + tokenData
  }
  return headers
}

export default {
  login (valor) {
    return new Promise((resolve, reject) => {
      axios.post(LOGIN_URL, valor)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

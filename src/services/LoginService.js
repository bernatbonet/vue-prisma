import axios from 'axios'
// import getHeader from '../auth.config'
// URL and endpoint constants
const API_URL = 'http://localhost:9988/'
const LOGIN_URL = API_URL + 'auth/api-token-auth/'
const USER_URL = API_URL + 'crm/user/'

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
  },
  getUser (header, params) {
    return new Promise((resolve, reject) => {
      axios.get(USER_URL + params, { headers: header })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

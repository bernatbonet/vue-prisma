import axios from 'axios'
// import getHeader from '../auth.config'
// URL and endpoint constants
const API_URL = 'http://localhost:9988/'
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
  setUser (header, params) {
    return new Promise((resolve, reject) => {
      axios.post(USER_URL + params, { headers: header })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          console.log('UserService: ' + err)
          reject(err)
        })
    })
  }
}

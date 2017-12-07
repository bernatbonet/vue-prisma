import axios from 'axios'

const API_URL = 'http://localhost:9988/'
const LOGIN_URL = API_URL + 'crm/company/'

export default {
  getCompanies (header) {
    return new Promise((resolve, reject) => {
      axios.get(LOGIN_URL, { headers: header })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

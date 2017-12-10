import axios from 'axios'

const API_URL = 'http://localhost:9988/'
const GET_COMPANY_URL = API_URL + 'crm/company/'

export default {
  getCompanies (header) {
    return new Promise((resolve, reject) => {
      axios.get(GET_COMPANY_URL, { headers: header })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

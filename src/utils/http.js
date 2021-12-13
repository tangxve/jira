import qs from 'qs'
import axios from 'axios'
import { cleanObject } from './index'

const apiUrl = process.env.REACT_APP_API_URL

axios.defaults.baseURL = apiUrl
export const http = (u, m = 'get', p) => {
  m = m.toUpperCase()
  const data = cleanObject(p)

  console.log('data', data)
  let url = u

  if (m === 'GET') {
    url =
      url.indexOf('?') === -1
        ? `${url}?${qs.stringify(data)}`
        : `${url}&${qs.stringify(data)}`
  }
  // let body = Object.create(null)
  return axios({
    url,
    method: m,
    data,
  })
}

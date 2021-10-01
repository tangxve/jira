import qs from 'qs'
import axios from 'axios'
import { cleanObject } from './index'

const apiUrl = process.env.REACT_APP_API_URL

axios.defaults.baseURL = apiUrl
export const http = (u, m = 'get', p) => {
  m = m.toUpperCase()
  const data = cleanObject(p)
  let url = ''

  if (m === 'GET') {
    console.log(222)
    url =
      u.indexOf('?') === -1
        ? `${u}?${qs.stringify(data)}`
        : `${u}&${qs.stringify(data)}`
  }
  return axios({
    url,
    method: m,
  })
}

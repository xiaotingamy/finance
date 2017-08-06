import axios from 'axios'

export function getBanners() {
  const url = '/api/getBanners'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

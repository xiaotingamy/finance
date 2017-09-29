import axios from 'axios'

export function getBanners() {
  const url = '/api/getBanners'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getRecommends() {
  const url = '/api/getRecommends'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getProductList() {
  const url = '/api/getProductList'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

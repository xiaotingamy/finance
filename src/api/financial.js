import axios from 'axios'

export function getBanners() {
  const url = '/rest/banners'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getProductList() {
  const url = '/rest/product/list'
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

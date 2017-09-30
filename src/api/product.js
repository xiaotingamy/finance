import axios from 'axios'

export function getProduct(id) {
  const url = `/api/getProduct/${id}`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getTradeDetail(tag, data) {
  const url = `/api/${tag}/trade/detail`
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

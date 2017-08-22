import axios from 'axios'

export function getProduct(id) {
  const url = '/api/getProduct'
  const data = {
    id: id
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

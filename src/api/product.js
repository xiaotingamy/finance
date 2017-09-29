import axios from 'axios'

export function getProduct(id) {
  const url = `/api/getProduct/${id}`
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}

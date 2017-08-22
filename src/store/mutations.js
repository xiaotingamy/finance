import * as types from './mutation-type'

const mutations = {
  [types.SET_PRODUCT_DETAIL](state, detail) {
    state.productDetail = detail
  }
}

export default mutations

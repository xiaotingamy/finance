import * as types from './mutation-type'

const mutations = {
  [types.SET_PRODUCT_DESCRIPTION](state, description) {
    state.productDescription = description
  }
}

export default mutations

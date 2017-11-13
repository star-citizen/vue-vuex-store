import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  ERROR_MSG
} from './mutation-types'

// Product mutations
export const productMutations = {
  [ALL_PRODUCTS] (state) {
    // fetching products
    state.showLoader = true
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    state.showLoader = false
    // update state products
    state.products = payload
  },
  [PRODUCT_BY_ID] (state) {
    // fetch product by ID
    state.showLoader = true
  },
  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    // update state product
    state.product = payload
  },
  [ADD_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products.push(payload)
  },
  [UPDATE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_PRODUCT_SUCCESS]:  (state, payload) => {
    state.showLoader = false
    state.products = state.products.map(p => {
      if (p._id === payload._id) {
        payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
        return payload
      }
      return p
    })
  },
  [REMOVE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.products.findIndex(p => p._id === payload)
    console.debug('index', index)
    state.products.splice(index, 1)
  },
  [ERROR_MSG] (state, payload) {}
}

// Cart mutations
export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  // remove from cart
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p._id === payload)
    state.cart.splice(index, 1)
    console.log(state.cart, state.cart.length, index)
  }
}

// Manufacturer mutations
export const manufacturerMutations = {
  [ALL_MANUFACTURERS] (state) {
    state.showLoader = true
  },
  [ALL_MANUFACTURERS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.manufacturer = payload
  }
}
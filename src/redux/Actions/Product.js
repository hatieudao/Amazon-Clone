import * as types from './Type'

export const addProduct = (product) => ({
  type: types.ADD_PRODUCT,
  product,
})
export const deleteProduct = (product) => ({
  type: types.DELETE_PRODUCT,
  product,
})
export const updateQuantity = (product, quantity) => ({
  type: types.UPDATE_QUANTITY,
  product,
  quantity,
})
export const emptyCart = () => ({
  type: types.EMPTY_CART,
})

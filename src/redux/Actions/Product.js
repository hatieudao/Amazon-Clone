import * as types from './Type.js'

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product: product
    }
}
export const deleteProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT,
        product: product
    }
}
export const updateQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_QUANTITY,
        product: product,
        quantity: quantity
    }
}
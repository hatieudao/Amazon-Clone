import * as types from '../Actions/Type'

const initialState = {
  products: [],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const pos = state.products.findIndex(
        (item) => item.id === action.product.id,
      )
      if (pos !== -1) {
        const basket = [...state.products]
        basket[pos].quantity += 1
        return {
          ...state,
          products: basket,
        }
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.product,
            quantity: 1,
          },
        ],
      }
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.product.id,
        ),
      }
    case types.UPDATE_QUANTITY:
      // eslint-disable-next-line no-case-declarations
      const pos1 = state.products.findIndex(
        (item) => item.id === action.product.id,
      )
      // eslint-disable-next-line no-case-declarations
      const basket = [...state.products]
      basket[pos1].quantity = action.quantity
      return {
        ...state,
        products: basket,
      }
    case types.EMPTY_CART:
      return {
        products: [],
      }
    default:
      return state
  }
}
export default productReducer

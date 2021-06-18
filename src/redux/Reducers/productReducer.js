import * as types from '../Actions/Type'

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:
            const pos = state.products.findIndex(item => item.id === action.product.id);
            if (pos !== -1) {
                const basket = [...state.products];
                basket[pos].quantity++;
                return {
                    ...state,
                    products: basket
                }
            }
            return {
                ...state,
                products: [...state.products, {
                    ...action.product,
                    quantity: 1
                }]
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.product.id)
            }
        case types.UPDATE_QUANTITY:
            const pos1 = state.products.findIndex(item => item.id === action.product.id);
            const basket = [...state.products];
            basket[pos1].quantity = action.quantity;
            return {
                ...state,
                products: basket
            }
        default:
            return state
    }
}
export default productReducer;
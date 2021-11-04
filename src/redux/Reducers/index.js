import { combineReducers } from 'redux'
import productReducer from './productReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  basket: productReducer,
  user: userReducer,
})

export default rootReducer

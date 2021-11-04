import * as types from '../Actions/Type'

const initialState = {
  user: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      return action.user
    case types.USER_LOGOUT:
      return null
    default:
      return state
  }
}
export default userReducer

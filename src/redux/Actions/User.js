import * as types from './Type'

export const userLogin = (user) => ({
  type: types.USER_LOGIN,
  user,
})
export const userLogout = () => ({
  type: types.USER_LOGOUT,
})

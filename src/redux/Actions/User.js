import * as types from './Type.js'

export const userLogin = (user) => {
    return {
        type: types.USER_LOGIN,
        user: user
    }
}
export const userLogout = () => {
    return {
        type: types.USER_LOGOUT
    }
}
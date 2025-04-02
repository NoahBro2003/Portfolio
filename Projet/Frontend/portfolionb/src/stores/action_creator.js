

import { SET_USER, SET_USERS, SET_AUTH_USER, LOGOUT_USER } from "./actions";


export const setUser = user => ({type: SET_USER, payload: user})
export const setUsers = users => ({type: SET_USERS, payload: users})

export const loggedInUser = user => ({type: SET_AUTH_USER, payload: user})
export const logout = () =>({type: LOGOUT_USER, payload: {}})
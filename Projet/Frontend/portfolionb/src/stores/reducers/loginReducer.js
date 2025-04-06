import { SET_AUTH_USER, LOGOUT_USER } from "../actions";


const initLoginUser = {
    data: {},
    token: ''
}

export const loginReducer = (state = initLoginUser, action)=>{
    const {type, payload} = action
    switch(type){
        case SET_AUTH_USER:
            return {...state, data: payload.data, token: payload.token}
        case LOGOUT_USER:
            return {...state, data: {}, token: null}
        default:
            return state
    }
}
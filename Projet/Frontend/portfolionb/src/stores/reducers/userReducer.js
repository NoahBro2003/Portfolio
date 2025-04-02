import { SET_USER, SET_USERS } from "../actions";

const initialUserState ={
    user: {},
    users: []
}

export const userReducer = (state = initialUserState, action)=>{
    const {type, payload} = action
    switch (type){
        case SET_USER:
            return {...state, user: payload}
        case SET_USERS:
            return {...state, users: payload}
    }
}
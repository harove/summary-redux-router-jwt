import {LOGIN_INIT,LOGIN_SUCCESS, LOGIN_ERROR} from './consts'

export const login_init = ()=>{
    return ({
        type: LOGIN_INIT
    })
} 

export const login_error = (error)=>{
    return ({
        type: LOGIN_ERROR,
        payload: error
    })
} 

export const login_success = (data)=>{
    return ({
        type: LOGIN_SUCCESS,
        payload: data
    })
} 



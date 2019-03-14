import * as types from './actionTypes';
import UserApi from '../api/userApi';

const userApi = new UserApi();

export function requestLogin(creds) {
    return { 
        type: types.REQUEST_LOGIN,
        creds,  
        isFetching: true,
        isAuthenticated: false
    };
}

export function loginSuccess(token) {
    return { 
        type: types.LOGIN_SUCCESS,
        token,
        isFetching: false,
        isAuthenticated: true 
    };
}

export function loginError(message) {
    return {
        type: types.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
}

export function requestLogout() {
    return { 
        type: types.REQUEST_LOGIN,
        isFetching: true,
        isAuthenticated: false
     };
}

export function logoutSuccess() {
    return { 
        type: types.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: false 
    };
}

export function requestRegistery(creds) {
    return { 
        type: types.REQUEST_REGISTERY, 
        creds,  
        isFetching: true,
        isAuthenticated: false
    };
}

export function registerSuccess(user) {
    return { 
        type: types.REGISTERY_SUCCESS, 
        user,  
        isFetching: false,
        isAuthenticated: true,
        token: user.token 
    };
}

export function registeryError(message) {
    return {
        type: types.REGISTERY_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
}

export function login(creds) {
    return async (dispatch, getState) => {
        try {
            dispatch(requestLogin(creds));

            const token = await userApi.login(creds);

            localStorage.setItem('token', token);

            dispatch(loginSuccess(token));
        }
        catch (e){
            dispatch(loginError(e));

            throw e;
        }
    };
}

export function register(creds) {
    return async (dispatch, getState) => {
        try {
            dispatch(requestRegistery(creds));

            const user = await userApi.register(creds);

            localStorage.setItem('token', user.token);

            dispatch(registerSuccess(user));
        }
        catch (e){
            dispatch(registeryError(e));
            
            throw e;
        }
    };
}

export function logout() {
    return async (dispatch, getState) => {        
        dispatch(logoutSuccess());

        localStorage.removeItem('token');

        dispatch(logoutSuccess());
    };
}
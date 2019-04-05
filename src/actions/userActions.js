import * as types from './actionTypes';
import UserApi from '../api/userApi';
import { history } from '../utils/history';

const userApi = new UserApi();

export function setAuthToFalse() {
    return {
        type: types.SET_AUTH_TO_FALSE,
        isFetching: false,
        isAuthenticated: false
    };
}

export function requestLogin(creds) {
    return {
        type: types.REQUEST_LOGIN,
        creds,
        isFetching: true,
        isAuthenticated: false
    };
}

export function loginSuccess(user) {
    return {
        type: types.LOGIN_SUCCESS,
        user,
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
        type: types.REQUEST_LOGOUT,
        isFetching: true,
        isAuthenticated: false
    };
}

export function logoutSuccess() {
    return {
        type: types.LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

export function requestRegistration(creds) {
    return {
        type: types.REQUEST_REGISTRATION,
        creds,
        isFetching: true,
        isAuthenticated: false
    };
}

export function registerSuccess(user) {
    return {
        type: types.REGISTRATION_SUCCESS,
        user,
        isFetching: false,
        isAuthenticated: true
    };
}

export function registeryError(message) {
    return {
        type: types.REGISTRATION_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
}

export function login(creds) {
    return async (dispatch, getState) => {
        try {
            dispatch(requestLogin(creds));

            const user = await userApi.login(creds);
            
            localStorage.setItem('user', JSON.stringify(user));

            dispatch(loginSuccess(user));

            history.push('/');
        } catch (e) {
            dispatch(loginError(e.message));
        }
    };
}

export function register(creds) {
    return async (dispatch, getState) => {
        try {
            dispatch(requestRegistration(creds));

            const user = await userApi.register(creds);

            localStorage.setItem('user', JSON.stringify(user));

            dispatch(registerSuccess(user));

            history.push('/');
        } catch (e) {
            dispatch(registeryError(e.message));
        }
    };
}

export function logout() {
    return async (dispatch, getState) => {
        history.push('/login');
        
        localStorage.removeItem('user');

        dispatch({type: types.SET_AUTH_TO_FALSE});

        dispatch(logoutSuccess());
    };
}

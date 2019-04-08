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

export function requestUpdateUser(creds) {
    return {
        type: types.REQUEST_UPDATE_USER,
        creds,
        isFetching: true,
        requiresAuth: true
    };
}

export function updateUserSuccess(user) {
    return {
        type: types.UPDATE_USER_SUCCESS,
        user,
        isFetching: false,
        requiresAuth: true
    };
}

export function updateUserError(message) {
    return {
        type: types.UPDATE_USER_FAILURE,
        isFetching: false,
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

export function updateUser(user) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestUpdateUser());

                const updatedUser = await userApi.updateUser(user);

                localStorage.setItem('user', JSON.stringify(updatedUser));

                dispatch(updateUserSuccess(updatedUser));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(updateUserError(e.message));
        }
    };
}
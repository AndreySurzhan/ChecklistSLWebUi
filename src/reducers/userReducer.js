import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.creds
            });
        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.user
            });
        case types.LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                errorMessage: action.message
            });
        case types.REQUEST_REGISTRATION:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.creds
            });
        case types.REGISTRATION_SUCCESS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.user
            });
        case types.REGISTRATION_FAILURE:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                errorMessage: action.message
            });
        case types.REQUEST_LOGOUT:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated
            });
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: {}
            });
        case types.CHECK_AUTH:
            return state;
        case types.SET_AUTH_TO_FALSE:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: {}
            });
        default:
            return state;
    }
}

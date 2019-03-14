import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.auth, action) {
    switch (action.type) {
        case types.REQUEST_LOGIN: 
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.creds
            });
        case types.LOGIN_SUCCESS:
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                token: action.token
            });        
        case types.LOGIN_FAILURE:
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                errorMessage: action.message
            });        
        case types.REQUEST_REGISTERY:
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.creds
            });        
        case types.REGISTERY_SUCCESS:
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                user: action.user,
                token: action.token
            });
        case types.REGISTERY_FAILURE:
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated,
                errorMessage: action.message
            });        
        case types.REQUEST_LOGOUT: 
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated
            });
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, {
                isFetching: action.isFetching,
                isAuthenticated: action.isAuthenticated
            });    
        default:
            return state;
    }
}

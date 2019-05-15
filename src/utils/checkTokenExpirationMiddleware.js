import jwt_decode from 'jwt-decode';
import { setAuthToFalse } from '../actions/userActions';
import * as types from '../actions/actionTypes';

export const isTokenValid = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    if (!user || jwt_decode(user.token).exp < Date.now() / 1000) {
        return false;
    }

    return true;
};

export const checkTokenExpirationMiddleware = store => next => action => {
    next({ type: types.CHECK_AUTH });

    if (!isTokenValid()) {
        next(setAuthToFalse());
    }

    next(action);
};

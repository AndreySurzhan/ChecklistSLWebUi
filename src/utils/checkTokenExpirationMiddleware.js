import jwt_decode from 'jwt-decode';
import { setAuthToFalse } from '../actions/userActions';
import * as types from '../actions/actionTypes';

export const checkTokenExpirationMiddleware = store => next => action => {
    next({type: types.CHECK_AUTH});

    const token = localStorage.getItem('token');

    if (!token || jwt_decode(token).exp < Date.now() / 1000) {
      next(setAuthToFalse());
    }

    next(action);
};

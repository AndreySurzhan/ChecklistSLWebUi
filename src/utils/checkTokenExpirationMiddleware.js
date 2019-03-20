import jwt_decode from 'jwt-decode'

export const checkTokenExpirationMiddleware = ({ getState }) => next => action => {
    const token = localStorage.getItem("token");

    if (!token || jwt_decode(token).exp < Date.now() / 1000) {
      next(action);
      localStorage.clear();
    }
    next(action);
  };
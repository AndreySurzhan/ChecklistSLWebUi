export const apiMiddleware = store => next => action => {
    next(action);
};
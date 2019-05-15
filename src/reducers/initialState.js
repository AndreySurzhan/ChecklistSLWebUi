import { isTokenValid } from '../utils/checkTokenExpirationMiddleware';

export default {
    checklists: {
        checklists: [],
        isFetching: false
    },
    auth: {
        isFetching: false,
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        isAuthenticated: isTokenValid()
    }
};

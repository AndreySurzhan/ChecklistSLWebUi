export default {
    checklists: [],
    auth: {
        isFetching: false,
        isAuthenticated: localStorage.getItem('token') ? true : false
    }
}
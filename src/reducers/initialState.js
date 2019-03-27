export default {
    checklists: {
        checklists: [],
        isFetching: false
    },
    auth: {
        isFetching: false,
        isAuthenticated: localStorage.getItem('token') ? true : false
    }
}
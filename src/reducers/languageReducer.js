import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function languageReducer(state = initialState.languages, action) {
    switch (action.type) {
        case types.REQUEST_LANGUAGES:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                languages: action.languages,
                user: action.creds
            });
        case types.GET_LANGUAGES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                languages: action.languages,
                user: action.user
            });
        case types.GET_LANGUAGES_FAILURE:
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                languages: action.languages,
                errorMessage: action.message
            });
        default:
            return state;
    }
}

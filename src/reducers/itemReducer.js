import * as types from '../actions/actionTypes';

export default function itemReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, Object.assign({}, action.item)];
        default:
            return state;
    }
}

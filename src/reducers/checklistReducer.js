import * as types from '../actions/actionTypes';

export default function checklistReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_CHECKLIST:
            return [...state, Object.assign({}, action.checklist)];
        case types.LOAD_CHECKLISTS_SUCCESS:
            return action.checklists;
        default:
            return state;
    }
}

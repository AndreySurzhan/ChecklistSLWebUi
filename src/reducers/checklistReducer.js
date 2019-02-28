import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function checklistReducer(state = initialState.checklists, action) {
    switch (action.type) {
        case types.ADD_CHECKLIST: 
            return [...state, Object.assign({}, action.checklist)];
        case types.ADD_ITEM: {
            const item = Object.assign({}, action.item);
            const newState = [...state];

            newState.forEach(checklist => {
                if(checklist.isActive) {
                    checklist.items.push(item);
                }
            })

            return newState;
        }
            
        case types.UPDATE_ITEM: {
            const newState = [...state];

            newState.forEach(checklist => {
                if(checklist.isActive) {
                    checklist.items.forEach(item => {
                        if(item._id === action.item) {
                            item = action.item
                        }
                    })
                }
            })

            return newState;
        }
        case types.LOAD_CHECKLISTS_SUCCESS:
            return action.checklists;       
        case types.STORE_ACTIVE_CHECKLIST:
            return action.activeChecklist;       
        case types.STORE_ACTIVE_CHECKLIST_ITEMS:
            return action.activeChecklist.items;
        default:
            return state;
    }
}

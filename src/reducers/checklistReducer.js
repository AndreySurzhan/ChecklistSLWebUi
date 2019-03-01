import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function checklistReducer(state = initialState.checklists, action) {
    switch (action.type) {
        case types.ADD_CHECKLIST_SUCCESS: 
            return [...state, Object.assign({}, action.checklist)];
        case types.UPDATE_CHECKLIST_SUCCESS: {
            return state.map(c => {
                if(c._id === action.checklist._id){
                    return Object.assign({}, action.checklist);
                }

                return c;
            });
        }
        case types.ADD_ITEM_SUCCESS: {
            return state.map(c => {
                if(c.isActive) {
                    const checklist = Object.assign({}, c);
                    
                    checklist.items = [...checklist.items, Object.assign({}, action.item)];

                    return checklist;
                }

                return c;
            });
        }
        case types.UPDATE_ITEM_SUCCESS: {
            return state.map(c => {
                if(c.isActive) {
                    const checklist = Object.assign({}, c);

                    checklist.items = [...checklist.items.filter(item => item._id !== action.item._id), Object.assign({}, action.item)];

                    checklist.items = checklist.items.map(item => {
                        if(item._id === action.item._id) {
                            return Object.assign({}, action.item);
                        }

                        return item;
                    })

                    return checklist;
                }

                return c;
            });
        }
        case types.LOAD_CHECKLISTS_SUCCESS:
            return action.checklists;
        default:
            return state;
    }
}

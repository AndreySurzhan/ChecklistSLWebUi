import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function checklistReducer(state = initialState.checklists, action) {
    switch (action.type) {
        case types.ADD_CHECKLIST: 
            return [...state, Object.assign({}, action.checklist)];
        case types.ADD_ITEM: {
            return state.map(c => {
                if(c.isActive) {
                    const item = Object.assign({}, action.item);
                    const checklist = Object.assign({}, c);
                    
                    checklist.items = [...checklist.items, item];

                    return checklist;
                }

                return c;
            });
        }
        case types.UPDATE_ITEM: {
            return state.map(c => {
                if(c.isActive) {
                    const checklist = Object.assign({}, c);

                    checklist.items = checklist.items.map(item => {
                        if(item._id === action.item._id) {
                            const updatedItem = Object.assign({}, action.item);

                            return updatedItem
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

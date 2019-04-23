import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function checklistReducer(state = initialState.checklists, action) {
    switch (action.type) {
        case types.REQUEST_ADD_CHECKLIST:
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist
            });
        case types.ADD_CHECKLIST_SUCCESS: 
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist,
                checklists: [...state.checklists, Object.assign({}, action.checklist)],
            });
        case types.ADD_CHECKLIST_FAILURE: 
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist,
                errorMessage: action.message
            });        

        case types.REQUEST_UPDATE_CHECKLIST:
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist
            });
        case types.UPDATE_CHECKLIST_SUCCESS: {
            const checklists = state.checklists.map(c => {
                if(c._id === action.checklist._id){
                    return Object.assign({}, action.checklist);
                }

                return c;
            }); 

            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist,
                checklists,
            });
        }
        case types.UPDATE_CHECKLIST_FAILURE: 
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist,
                errorMessage: action.message
            });      
              
        case types.REQUEST_DELETE_CHECKLIST:
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist
            });
        case types.DELETE_CHECKLIST_SUCCESS: { 
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist,
                checklists: [...state.checklists.filter(checklist => checklist._id !== action.checklist._id)]
            });
        }
        case types.DELETE_CHECKLIST_FAILURE: 
            return Object.assign({}, state, {
                isApiChecklist: action.isApiChecklist,
                errorMessage: action.message
            });        
        
        case types.REQUEST_ADD_ITEM:
            return Object.assign({}, state, {
                isApiItem: action.isApiItem
            });
        case types.ADD_ITEM_SUCCESS: {
            const checklists = state.checklists.map(c => {
                if(c.isActive) {
                    const checklist = Object.assign({}, c);
                    
                    checklist.items = [...checklist.items, Object.assign({}, action.item)];

                    return checklist;
                }

                return c;
            }); 

            return Object.assign({}, state, {
                isApiItem: action.isApiItem,
                checklists,
            });
        }
        case types.ADD_ITEM_FAILURE: 
            return Object.assign({}, state, {
                isApiItem: action.isApiItem,
                errorMessage: action.message
            });   

        case types.REQUEST_UPDATE_ITEM:
            return Object.assign({}, state, {
                isApiItem: action.isApiItem
            });
        case types.UPDATE_ITEM_SUCCESS: {
            const checklists = state.checklists.map(c => {
                if(c.isActive) {
                    const checklist = Object.assign({}, c);

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

            return Object.assign({}, state, {
                isApiItem: action.isApiItem,
                checklists,
            });
        }
        case types.UPDATE_ITEM_FAILURE: 
            return Object.assign({}, state, {
                isApiItem: action.isApiItem,
                errorMessage: action.message
            });     

        case types.REQUEST_DELETE_ITEM:
            return Object.assign({}, state, {
                isApiItem: action.isApiItem
            });
        case types.DELETE_ITEM_SUCCESS: {
            const checklists = state.checklists.map(c => {
                const hasItem = c.items.findIndex(item => item._id === action.item._id) !== -1;

                if(hasItem) {
                    const checklist = Object.assign({}, c);
                    
                    checklist.items = [...checklist.items.filter(item => item._id !== action.item._id)];

                    return checklist;
                }

                return c;
            }); 

            return Object.assign({}, state, {
                isApiItem: action.isApiItem,
                checklists,
            });
        }
        case types.DELETE_ITEM_FAILURE: 
            return Object.assign({}, state, {
                isApiItem: action.isApiItem,
                errorMessage: action.message
            });   

        case types.REQUEST_LOAD_CHECKLISTS:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            });
        case types.LOAD_CHECKLISTS_SUCCESS:            
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                checklists: action.checklists
            });
        case types.LOAD_CHECKLISTS_FAILURE: 
            return Object.assign({}, state, {
                isFetching: action.isFetching,
                errorMessage: action.message
            });   
        default:
            return state;
    }
}

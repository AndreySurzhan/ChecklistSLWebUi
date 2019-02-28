import * as types from '../actions/actionTypes';

export default function itemReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, Object.assign({}, action.item)];
        case types.UPDATE_ITEM:
            let newState = [...state];

            for(let i = 0; i < newState.length; i++){
                if(newState[i]._id === action.item._id){
                    newState.splice(newState.indexOf(state[i]), 1, action.item)
                }
            }

            return newState;
        default:
            return state;
    }
}

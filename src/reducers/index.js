import { combineReducers } from 'redux';
import checklists from './checklistReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    checklists,
    user
});

export default rootReducer;

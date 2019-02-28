import { combineReducers } from 'redux';
import checklists from './checklistReducer';

const rootReducer = combineReducers({
    checklists
});

export default rootReducer;

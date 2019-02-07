import { combineReducers } from 'redux';
import items from './itemReducer';
import checklists from './checklistReducer';

const rootReducer = combineReducers({
    items,
    checklists // name of the property on state object
});

export default rootReducer;

import { combineReducers } from 'redux';
import checklists from './checklistReducer';
import user from './userReducer';
import languages from './languageReducer';

const rootReducer = combineReducers({
    checklists,
    user,
    languages
});

export default rootReducer;

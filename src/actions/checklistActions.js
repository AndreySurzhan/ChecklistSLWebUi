import * as types from './actionTypes';
import ChecklistApi from '../api/checklistApi';

const checklistApi = new ChecklistApi();

export function addChecklist(checklist) {
    return { type: types.ADD_CHECKLIST, checklist };
}

export function loadChecklistsSuccess(checklists) {
    return { type: types.LOAD_CHECKLISTS_SUCCESS, checklists };
}

export function loadChecklists() {
    return (dispatch) => {
        return checklistApi.getAllChecklists().then(checklists => {
            dispatch(loadChecklistsSuccess(checklists));
        }).catch(e => {
            throw e;
        })
    };
}

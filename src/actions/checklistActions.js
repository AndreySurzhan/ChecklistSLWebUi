import * as types from './actionTypes';
import ChecklistApi from '../api/checklistApi';

const checklistApi = new ChecklistApi();

export function addChecklist(checklist) {
    return { type: types.ADD_CHECKLIST, checklist };
}

export function loadChecklistsSuccess(checklists) {
    return { type: types.LOAD_CHECKLISTS_SUCCESS, checklists };
}

export function storeActiveChecklist(checklist) {
    return { type: types.STORE_ACTIVE_CHECKLIST, checklist };
}

export function storeActiveChecklistItems(items) {
    return { type: types.STORE_ACTIVE_CHECKLIST_ITEMS, items };
}

export function addItem(item) {
    return { type: types.ADD_ITEM, item };
}

export function updateItem(item) {
    return { type: types.UPDATE_ITEM, item };
}

export function loadChecklists() {
    return async (dispatch) => {
        try
        {
            const checklists = await checklistApi.getAllChecklists();
            dispatch(loadChecklistsSuccess(checklists));
        }
        catch (e)
        {
            throw e;
        }
    };
}

import * as types from './actionTypes';
import ChecklistApi from '../api/checklistApi';

const checklistApi = new ChecklistApi();

export function addChecklistSuccess(checklist) {
    return { type: types.ADD_CHECKLIST_SUCCESS, checklist };
}
export function updateChecklistSuccess(checklist) {
    return { type: types.UPDATE_CHECKLIST_SUCCESS, checklist };
}

export function loadChecklistsSuccess(checklists) {
    return { type: types.LOAD_CHECKLISTS_SUCCESS, checklists };
}

export function addItemSuccess(item) {
    return { type: types.ADD_ITEM_SUCCESS, item };
}

export function updateItemSuccess(item) {
    return { type: types.UPDATE_ITEM_SUCCESS, item };
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

export function addChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const checklistToUpdate = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
            const createdChecklist = await checklistApi.creatChecklist(checklist);

            if (checklistToUpdate) {
                checklistToUpdate.isActive = false;
                const updatedChecklist = await checklistApi.updateChecklist(checklistToUpdate);
                dispatch(updateChecklistSuccess(updatedChecklist));
            }

            dispatch(addChecklistSuccess(createdChecklist));
        }
        catch (e){
            throw e;
        }
    };
}

export function addItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const checklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);

            if (checklist) {
                const addedItem = await checklistApi.addItem(checklist._id, item);
                dispatch(addItemSuccess(addedItem));
            }
        }
        catch (e){
            throw e;
        }
    };
}

export function updateItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const checklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
            const updatedItem = await checklistApi.updateItem(checklist._id, item);
            dispatch(updateItemSuccess(updatedItem));
        }
        catch (e){
            throw e;
        }
    };
}

export function selectChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            let activeChecklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
            let checklistToSelect = Object.assign({}, checklist);

            if (activeChecklist && checklistToSelect) {
                activeChecklist.isActive = false;
                activeChecklist = await checklistApi.updateChecklist(activeChecklist);

                checklistToSelect.isActive = true;
                checklistToSelect = await checklistApi.updateChecklist(checklistToSelect);
                
                
                dispatch(updateChecklistSuccess(activeChecklist));
                dispatch(updateChecklistSuccess(checklistToSelect));
            }
        }
        catch (e){
            throw e;
        }
    };
}
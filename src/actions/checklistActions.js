import * as types from './actionTypes';
import ChecklistApi from '../api/checklistApi';
import { logout } from '../actions/userActions';

const checklistApi = new ChecklistApi();

export function addChecklistSuccess(checklist) {
    return { type: types.ADD_CHECKLIST_SUCCESS, checklist };
}

export function updateChecklistSuccess(checklist) {
    return { type: types.UPDATE_CHECKLIST_SUCCESS, checklist };
}

export function deleteChecklistSuccess(checklist) {
    return { type: types.DELETE_CHECKLIST_SUCCESS, checklist };
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

export function deleteItemSuccess(item) {
    return { type: types.DELETE_ITEM_SUCCESS, item };
}

export function loadChecklists() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            if (state.user.isAuthenticated) {
                const checklists = await checklistApi.getAllChecklists();
                dispatch(loadChecklistsSuccess(checklists));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function addChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                const checklistToUpdate = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
                const createdChecklist = await checklistApi.creatChecklist(checklist);

                if (checklistToUpdate && Object.entries(checklistToUpdate).length !== 0) {
                    checklistToUpdate.isActive = false;
                    const updatedChecklist = await checklistApi.updateChecklist(checklistToUpdate);

                    dispatch(updateChecklistSuccess(updatedChecklist));
                }

                dispatch(addChecklistSuccess(createdChecklist));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function addItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                const checklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);

                if (checklist) {
                    const addedItem = await checklistApi.addItem(checklist._id, item);

                    dispatch(addItemSuccess(addedItem));
                }
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function updateItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {            
                const checklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
                const updatedItem = await checklistApi.updateItem(checklist._id, item);

                dispatch(updateItemSuccess(updatedItem));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function updateChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {            
                const updatedChecklist = await checklistApi.updateChecklist(checklist);

                dispatch(updateChecklistSuccess(updatedChecklist));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function selectChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {            
                let activeChecklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
                let checklistToSelect = Object.assign({}, checklist);

                if (activeChecklist && Object.entries(activeChecklist).length !== 0) {
                    activeChecklist.isActive = false;
                    activeChecklist = await checklistApi.updateChecklist(activeChecklist);

                    dispatch(updateChecklistSuccess(activeChecklist));
                }

                checklistToSelect.isActive = true;
                checklistToSelect = await checklistApi.updateChecklist(checklistToSelect);
                dispatch(updateChecklistSuccess(checklistToSelect));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function deleteItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                const checklist = Object.assign({}, state.checklists.filter(c => c.isActive)[0]);
                const deletedItem = await checklistApi.deleteItem(checklist._id, item);
    
                dispatch(deleteItemSuccess(deletedItem));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

export function deleteChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                const isActiveChecklist = checklist.isActive;
                const deletedChecklist = await checklistApi.deleteChecklist(checklist);
    
                if (deletedChecklist) {
                    if (isActiveChecklist) {
                        const state = getState();
                        let checklistToSelect = Object.assign({}, state.checklists[0]);
    
                        if (checklistToSelect && Object.entries(checklistToSelect).length !== 0) {
                            checklistToSelect.isActive = true;
                            checklistToSelect = await checklistApi.updateChecklist(checklistToSelect);
    
                            dispatch(updateChecklistSuccess(checklistToSelect));
                        }
                    }
    
                    dispatch(deleteChecklistSuccess(deletedChecklist));
                }
    
            } else {
                dispatch(logout());
            }
        } catch (e) {
            throw e;
        }
    };
}

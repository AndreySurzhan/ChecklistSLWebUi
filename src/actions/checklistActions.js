import * as types from './actionTypes';
import ChecklistApi from '../api/checklistApi';
import { logout } from '../actions/userActions';

const checklistApi = new ChecklistApi();

export function requestAddChecklist(checklist) {
    return {
        type: types.REQUEST_ADD_CHECKLIST,
        checklist,
        requiresAuth: true,
        isApiAddChecklist: true
    };
}

export function addChecklistSuccess(checklist) {
    return {
        type: types.ADD_CHECKLIST_SUCCESS,
        checklist,
        isApiAddChecklist: false
    };
}

export function addChecklistError(message) {
    return {
        type: types.ADD_CHECKLIST_FAILURE,
        isApiAddChecklist: false,
        message
    };
}

export function requestUpdateChecklist(checklist) {
    return {
        type: types.REQUEST_UPDATE_CHECKLIST,
        checklist,
        requiresAuth: true,
        isApiUpdateChecklist: true
    };
}

export function updateChecklistSuccess(checklist) {
    return {
        type: types.UPDATE_CHECKLIST_SUCCESS,
        checklist,
        isApiUpdateChecklist: false
    };
}

export function updateChecklistError(message) {
    return {
        type: types.UPDATE_CHECKLIST_FAILURE,
        isApiUpdateChecklist: false,
        message
    };
}

export function requestDeleteChecklist(checklist) {
    return {
        type: types.REQUEST_DELETE_CHECKLIST,
        checklist,
        requiresAuth: true,
        isApiChecklist: true
    };
}

export function deleteChecklistSuccess(checklist) {
    return {
        type: types.DELETE_CHECKLIST_SUCCESS,
        checklist,
        isApiChecklist: false
    };
}

export function deleteChecklistError(message) {
    return {
        type: types.DELETE_CHECKLIST_FAILURE,
        isApiChecklist: false,
        message
    };
}

export function requestLoadChecklists() {
    return {
        type: types.REQUEST_LOAD_CHECKLISTS,
        requiresAuth: true,
        isApiChecklist: true,
        isFetching: true
    };
}

export function loadChecklistsSuccess(checklists) {
    return {
        type: types.LOAD_CHECKLISTS_SUCCESS,
        checklists,
        isApiChecklist: false,
        isFetching: false
    };
}

export function loadChecklistsError(message) {
    return {
        type: types.LOAD_CHECKLISTS_FAILURE,
        isApiChecklist: false,
        isFetching: false,
        message
    };
}

export function requestAddItem(item) {
    return {
        type: types.REQUEST_ADD_ITEM,
        item,
        requiresAuth: true,
        isApiAddItem: true
    };
}

export function addItemSuccess(item) {
    return {
        type: types.ADD_ITEM_SUCCESS,
        item,
        isApiAddItem: false
    };
}

export function addItemError(message) {
    return {
        type: types.ADD_ITEM_FAILURE,
        isFetching: false,
        isApiAddItem: false
    };
}

export function requestUpdateItem(item) {
    return {
        type: types.REQUEST_UPDATE_ITEM,
        item,
        requiresAuth: true,
        isApiEditItem: true
    };
}

export function updateItemSuccess(item) {
    return {
        type: types.UPDATE_ITEM_SUCCESS,
        item,
        isApiEditItem: false
    };
}

export function updateItemError(message) {
    return {
        type: types.UPDATE_ITEM_FAILURE,
        isApiEditItem: false,
        message
    };
}

export function requestDeleteItem(item) {
    return {
        type: types.REQUEST_DELETE_ITEM,
        item,
        requiresAuth: true,
        isApiItem: true
    };
}

export function deleteItemSuccess(item) {
    return {
        type: types.DELETE_ITEM_SUCCESS,
        item,
        isApiItem: false
    };
}

export function deleteItemError(message) {
    return {
        type: types.DELETE_ITEM_FAILURE,
        isApiItem: false,
        message
    };
}

export function loadChecklists() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            
            if (state.user.isAuthenticated) {
                dispatch(requestLoadChecklists());

                const checklists = await checklistApi.getAllChecklists();

                dispatch(loadChecklistsSuccess(checklists));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(loadChecklistsError(e.message));
        }
    };
}

export function addChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestAddChecklist(checklist));

                const createdChecklist = await checklistApi.creatChecklist(checklist);

                dispatch(addChecklistSuccess(createdChecklist));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(addChecklistError(e.message));
        }
    };
}

export function addItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestAddItem(item));

                const addedItem = await checklistApi.addItem(item.checklist, item);

                dispatch(addItemSuccess(addedItem));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(addItemError(e.message));
        }
    };
}

export function updateItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestUpdateItem(item));

                const updatedItem = await checklistApi.updateItem(item.checklist, item);

                dispatch(updateItemSuccess(updatedItem));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(updateItemError(e.message));
        }
    };
}

export function updateChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestUpdateChecklist(checklist));

                const updatedChecklist = await checklistApi.updateChecklist(checklist);

                dispatch(updateChecklistSuccess(updatedChecklist));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(updateChecklistError(e.message));
        }
    };
}

export function deleteItem(item) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestDeleteItem(item));

                const deletedItem = await checklistApi.deleteItem(item.checklist, item);

                dispatch(deleteItemSuccess(deletedItem));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(deleteItemError(e.message));
        }
    };
}

export function deleteChecklist(checklist) {
    return async (dispatch, getState) => {
        try {
            const state = getState();

            if (state.user.isAuthenticated) {
                dispatch(requestDeleteChecklist(checklist));

                const deletedChecklist = await checklistApi.deleteChecklist(checklist);

                if (deletedChecklist) {
                    dispatch(deleteChecklistSuccess(deletedChecklist));
                } else {
                    throw new Error('Failed to delete checklist');
                }
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(deleteChecklistError(e.message));
        }
    };
}

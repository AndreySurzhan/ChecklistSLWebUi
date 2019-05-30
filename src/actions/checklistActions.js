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
    checklist.isApiUpdateChecklist = true;

    return {
        type: types.REQUEST_UPDATE_CHECKLIST,
        checklist,
        requiresAuth: true
    };
}

export function updateChecklistSuccess(checklist) {
    checklist.isApiUpdateChecklist = false;

    return {
        type: types.UPDATE_CHECKLIST_SUCCESS,
        checklist
    };
}

export function updateChecklistError(message, checklist) {
    checklist.isApiUpdateChecklist = false;

    return {
        type: types.UPDATE_CHECKLIST_FAILURE,
        message,
        checklist
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
    item.isApiUpdateItem = true;

    return {
        type: types.REQUEST_UPDATE_ITEM,
        item,
        requiresAuth: true
    };
}

export function updateItemSuccess(item) {
    item.isApiUpdateItem = false;

    return {
        type: types.UPDATE_ITEM_SUCCESS,
        item
    };
}

export function updateItemError(message, item) {
    item.isApiUpdateItem = false;

    return {
        type: types.UPDATE_ITEM_FAILURE,
        item,
        message
    };
}

export function requestCheckItem(item) {
    return {
        type: types.REQUEST_UPDATE_ITEM,
        item,
        requiresAuth: true
    };
}

export function checkItemSuccess(item) {
    return {
        type: types.UPDATE_ITEM_SUCCESS,
        item
    };
}

export function checkItemError(message, item) {
    return {
        type: types.UPDATE_ITEM_FAILURE,
        item,
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
        const state = getState();
        const itemFromState = state.checklists.checklists.find(c => c._id === item.checklist).items.find(i => i._id === item._id);
        const isItemBeingChecked = itemFromState && itemFromState.isChecked !== item.isChecked;
        const requestAction = item => isItemBeingChecked ? requestCheckItem(item) : requestUpdateItem(item);
        const successAction = item => isItemBeingChecked ? checkItemSuccess(item) : updateItemSuccess(item);
        const errorAction = (message, item) => isItemBeingChecked ? checkItemError(item) : updateItemError(message, item);

        try {
            if (state.user.isAuthenticated) {
                dispatch(requestAction(item));

                const updatedItem = await checklistApi.updateItem(item.checklist, item);

                dispatch(successAction(updatedItem));
            } else {
                dispatch(logout());
            }
        } catch (e) {
            dispatch(errorAction(e.message, item));
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
            dispatch(updateChecklistError(e.message, checklist));
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

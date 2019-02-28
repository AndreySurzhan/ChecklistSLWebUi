import * as types from './actionTypes';

export function addItem(item) {
    return { type: types.ADD_ITEM, item };
}

export function updateItem(item) {
    return { type: types.UPDATE_ITEM, item };
}

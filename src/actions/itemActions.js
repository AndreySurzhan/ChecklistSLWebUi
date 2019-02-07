import * as types from './actionTypes';

export function addItem(item) {
    return { type: types.ADD_ITEM, item };
}

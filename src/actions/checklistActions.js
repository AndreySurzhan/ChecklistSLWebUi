import * as types from './actionTypes';

export function addChecklist(checklist) {
    return { type: types.ADD_CHECKLIST, checklist };
}

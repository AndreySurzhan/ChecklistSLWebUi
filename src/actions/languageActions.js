import * as types from './actionTypes';
import LanguageApi from '../api/languageApi';

const languageApi = new LanguageApi();

export function getLanguagesError(message) {
    return {
        type: types.GET_LANGUAGES_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    };
}

export function requestLanguages() {
    return {
        type: types.REQUEST_LANGUAGES,
        isFetching: true,
        languages: []
    };
}

export function getLanguagesSuccess(languages) {
    return {
        type: types.GET_LANGUAGES_SUCCESS,
        isFetching: false,
        languages
    };
}

export function getLanguages() {
    return async (dispatch, getState) => {
        try {
            dispatch(requestLanguages());

            const languages = await languageApi.getAllLanguages();

            dispatch(getLanguagesSuccess(languages));
        } catch (e) {
            dispatch(getLanguagesError(e.message));
        }
    };
}

export function getLanguageNameByCode(code) {
    return async (dispatch, getState) => {
        try {
            const languages = getState().languages.languages;
            for (let i = 0; i < languages.languages.length; i++) {
                const lang = languages.languages[i];
    
                if (lang.code === code) {
                    return lang.name;
                }
            }
    
            return null;
        } catch (e) {
        }
    };
}

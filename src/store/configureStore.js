import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {checkTokenExpirationMiddleware} from '../utils/checkTokenExpirationMiddleware'
import {apiMiddleware} from '../utils/apiMiddleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(checkTokenExpirationMiddleware, apiMiddleware, thunk, reduxImmutableStateInvariant()))
    );
}

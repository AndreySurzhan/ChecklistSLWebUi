import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
import { history } from './utils/history';
import dotenv from 'dotenv';


//possible to import css as is here. Webpack with handle it

//Loads environment variables from .env files
dotenv.config()

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

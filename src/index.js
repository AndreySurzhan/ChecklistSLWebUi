import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';
import * as serviceWorker from './serviceWorker';
//possible to import css as is here. Webpack with handle it

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

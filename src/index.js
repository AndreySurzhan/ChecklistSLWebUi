import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from '../src/components/App/App';
import LoginPage from '../src/components/LoginPage';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <CssBaseline />
            <Route exact path="/" component={App} />
            <Route path="/logout" component={LoginPage} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

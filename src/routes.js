import React from 'react';
import { Route } from 'react-router-dom';
import App from '../src/components/App/App';
import ChecklistPage from '../src/components/ChecklistPage';
import LoginPage from '../src/components/LoginPage';

export default (
    <App>
        <Route exact path="/" component={ChecklistPage} />
        <Route path="/logout" component={LoginPage} />
    </App>
);

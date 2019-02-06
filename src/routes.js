import React from 'react';
import { Route } from 'react-router-dom';
import App from '../src/common/components/App/App';
import ChecklistPage from './pages/ChecklistPage';
import LoginPage from './pages/LoginPage';

export default (
    <App>
        <Route exact path="/" component={ChecklistPage} />
        <Route path="/logout" component={LoginPage} />
    </App>
);

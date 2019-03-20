import React from 'react';
import { Route } from 'react-router-dom';
import App from '../src/common/components/App/App';
import ChecklistPage from './pages/ChecklistPage';
import LoginPage from './pages/LoginPage';
import { PrivateRoute } from './components/PrivateRoute';

export default (
    <App>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={ChecklistPage}/>
    </App>
);
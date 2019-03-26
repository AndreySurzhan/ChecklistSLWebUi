import React from 'react';
import { Route } from 'react-router-dom';
import App from '../src/common/components/App/App';
import ChecklistPage from './pages/ChecklistPage';
import LoginRegPage from './pages/LoginRegPage';
import { PrivateRoute } from './components/PrivateRoute';

export default (
    <App>
        {["/login", "/register"].map((path, index) => 
            <Route path={path} component={LoginRegPage} key={index} />
        )}
        <PrivateRoute exact path="/" component={ChecklistPage}/>
    </App>
);